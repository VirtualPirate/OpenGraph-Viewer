import styles from "./OpenGraphCard.module.css";

type OpenGraphCardProps = {
  title: string;
  url: string;
  description: string;
  image: string;
};

export default function OpenGraphCard({
  title,
  url,
  description,
  image,
}: OpenGraphCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt="Open Graph Image" />
      <div className={styles.title}>{title}</div>
      <div className={styles.url}>{url}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
