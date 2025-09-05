import React, { useState, useEffect, useRef } from "react";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormInputs>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle focus events
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(e.target.name);
  };

  // Handle blur events
  const handleBlur = () => {
    setFocusedField(null);
  };

  // Basic email validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Partial<FormInputs> = {};
    if (!inputs.name.trim()) newErrors.name = "Name is required";
    if (!inputs.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(inputs.email)) newErrors.email = "Invalid email format";
    if (!inputs.phone.trim()) newErrors.phone = "Phone is required";
    if (!inputs.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Add shake animation to form on error
      if (formRef.current) {
        formRef.current.classList.add('animate-shake');
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.classList.remove('animate-shake');
          }
        }, 500);
      }
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      console.log(inputs);
      setSubmitted(true);
      setIsLoading(false);
      setInputs({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  // Floating particles effect
  useEffect(() => {
    const createParticle = () => {
      if (!formRef.current) return;
      
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 4;
      const colors = ['#818cf8', '#a78bfa', '#f472b6', '#fb7185'];
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.opacity = '0';
      particle.style.zIndex = '0';
      particle.style.boxShadow = '0 0 6px currentColor';
      
      formRef.current.appendChild(particle);
      
      // Animate particle
      const animation = particle.animate([
        { opacity: 0, transform: 'translateY(0) translateX(0)' },
        { opacity: 0.5, offset: 0.1 },
        { opacity: 0.7, offset: 0.5 },
        { opacity: 0, transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px)` }
      ], {
        duration: Math.random() * 5000 + 5000,
        easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
      });
      
      animation.onfinish = () => {
        particle.remove();
      };
    };
    
    // Create initial particles
    const particlesInterval = setInterval(createParticle, 600);
    
    return () => {
      clearInterval(particlesInterval);
    };
  }, []);

  // /bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-8 relative overflow-hidden"> 
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-400/10 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-300/10 rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <div 
        ref={formRef}
        className="relative w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 animate-fade-in-up"
      >
        {/* Animated border effect */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 p-1 -z-10 opacity-70 ${focusedField ? 'animate-border-pulse' : ''}`}>
          <div className="rounded-3xl bg-white w-full h-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-8 z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2 animate-text-focus-in">
              Let's Connect
            </h2>
            <p className="text-gray-600 text-sm">We'd love to hear from you</p>
          </div>

          {["name", "email", "phone"].map((field) => (
            <div key={field} className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur ${focusedField === field ? 'opacity-50' : ''}`}></div>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={inputs[field as keyof FormInputs]}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`relative w-full px-4 py-4 bg-white/70 backdrop-blur-sm rounded-xl border-0 text-gray-900 placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-0 ${
                  errors[field as keyof FormInputs] 
                    ? "animate-field-error bg-red-50/70" 
                    : "shadow-[0_2px_12px_-5px_rgba(0,0,0,0.1)]"
                } ${focusedField === field ? 'transform scale-[1.02] bg-white/90' : ''}`}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
              <label
                className={`absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none ${
                  inputs[field as keyof FormInputs] || focusedField === field
                    ? "-top-5 text-sm font-medium bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
                    : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                } ${errors[field as keyof FormInputs] ? "text-red-500" : ""}`}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
                {errors[field as keyof FormInputs] && " *"}
              </label>
              {errors[field as keyof FormInputs] && (
                <p className="text-red-500 text-xs mt-2 animate-shake">
                  {errors[field as keyof FormInputs]}
                </p>
              )}
            </div>
          ))}

          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur ${focusedField === 'message' ? 'opacity-50' : ''}`}></div>
            <textarea
              name="message"
              value={inputs.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              rows={4}
              className={`relative w-full px-4 py-4 bg-white/70 backdrop-blur-sm rounded-xl border-0 text-gray-900 placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-0 resize-none ${
                errors.message 
                  ? "animate-field-error bg-red-50/70" 
                  : "shadow-[0_2px_12px_-5px_rgba(0,0,0,0.1)]"
              } ${focusedField === 'message' ? 'transform scale-[1.02] bg-white/90' : ''}`}
              placeholder="Message"
            />
            <label
              className={`absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none ${
                inputs.message || focusedField === 'message'
                  ? "-top-5 text-sm font-medium bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
                  : "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
              } ${errors.message ? "text-red-500" : ""}`}
            >
              Message
              {errors.message && " *"}
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-2 animate-shake">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`relative w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-pink-500 shadow-lg transform transition-all duration-500 flex items-center justify-center space-x-2 overflow-hidden ${
              isLoading
                ? "opacity-90 cursor-not-allowed"
                : "hover:scale-[1.02] hover:shadow-xl hover:from-indigo-500 hover:to-pink-400 active:scale-95"
            }`}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 transform -translate-x-full group-hover:translate-x-full">
              <span className="w-12 h-48 bg-white/20 rotate-12"></span>
            </span>
            
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                  />
                </svg>
                <span>Sending...</span>
              </>
            ) : submitted ? (
              <span className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 animate-checkmark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Message Sent!</span>
              </span>
            ) : (
              <span className="relative z-10">Send Message</span>
            )}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-focus-in {
          0% {
            filter: blur(12px);
            opacity: 0;
          }
          100% {
            filter: blur(0);
            opacity: 1;
          }
        }
        
        @keyframes field-error {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }
        
        @keyframes border-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }
        
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 20;
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-text-focus-in {
          animation: text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }
        
        .animate-field-error {
          animation: field-error 0.5s linear;
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        
        .animate-checkmark {
          animation: checkmark 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;