import Title from "../Title";
import Text from "../Text";
import styles from "./ContentSection.module.scss";
import Button from "../Button";
import ArrowRight from "./assets/ArrowRight";
import { ISectionArticles } from "../../context/data";

interface ArticleContentProps {
  titleText: string;
  titleBody: string;
  articleLink: string;
  imgSrc: string;
  imgAltText: string;
  flip: boolean;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  titleText,
  titleBody,
  articleLink,
  imgSrc,
  imgAltText,
  flip,
}) => {
  const goTo = (url: string) => {
    console.log(url);
  };

  return (
    <article
      className={`${styles.sectionArticle}${
        flip ? ` ${styles.flipOrientation}` : ""
      }`}
    >
      <div className={styles.articleContent}>
        <Title level={3}>{titleText}</Title>
        <Text>{titleBody}</Text>
        <Button onClick={() => goTo(articleLink)} className={styles.articleBtn}>
          <Text>View details</Text>
          <ArrowRight />
        </Button>
      </div>
      <div className={styles.articleImage}>
        <img src={imgSrc} alt={imgAltText} />
      </div>
    </article>
  );
};

const ContentSection: React.FC<ISectionArticles> = ({
  sectionTitle,
  sectionHeaderText,
  sectionId,
  borderColor,
  content,
  index,
}) => {
  const shouldFlip = (index + 2) % 2 === 0 && content.length === 1;
  return (
    <>
      <section className={styles.sectionContainer}>
        <header id={sectionId} className={styles.sectionHeader}>
          <div className={styles.sectionHeaderContainer}>
            <Title level={4} className={styles[`border-${borderColor}`]}>
              {sectionTitle}
            </Title>
            <Text type="regular">{sectionHeaderText}</Text>
          </div>
        </header>
        <div
          className={`${styles.relativeBox} ${styles[`border-${borderColor}`]}`}
        >
          {content.map(
            ({ id, titleBody, titleText, articleLink, imgSrc, imgAltText }) => (
              <ArticleContent
                titleBody={titleBody}
                titleText={titleText}
                articleLink={articleLink}
                imgSrc={imgSrc}
                imgAltText={imgAltText}
                key={id}
                flip={shouldFlip}
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ContentSection;
