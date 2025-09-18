import { images } from "../../constants/images";

interface ExpertiseCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const expertiseData: ExpertiseCard[] = [
  {
    id: 1,
    title: "UPI Autopay",
    description:
      "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    imageSrc: images.UIP,
    imageAlt: "UPI Autopay illustration",
  },
  {
    id: 2,
    title: "API Banking",
    description:
      "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    imageSrc: images.Banking,
    imageAlt: "API Banking illustration",
  },
  {
    id: 3,
    title: "Payouts",
    description:
      "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
    imageSrc: images.Payouts,
    imageAlt: "Payouts illustration",
  },
  {
    id: 4,
    title: "Bulk Payments",
    description:
      "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
    imageSrc: images.BulkPayments,
    imageAlt: "Bulk Payments illustration",
  },
];