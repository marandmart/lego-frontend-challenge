import Title from "../Title";
import Text from "../Text";
import styles from "./Article.module.scss";
import Button from "../Button";
import ArrowRight from "./assets/ArrowRight";
import { ISectionArticles } from "../../pages/Home/data";

interface ArticleContentProps {
  titleText: string;
  titleBody: string;
  articleLink: string;
  imgSrc: string;
  imgAltText: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  titleText,
  titleBody,
  articleLink,
  imgSrc,
  imgAltText,
}) => {
  const goTo = (url: string) => {
    console.log(url);
  };

  return (
    <article className={styles.sectionArticle}>
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

const ContentSections: React.FC<ISectionArticles> = ({
  sectionTitle,
  sectionHeaderText,
  sectionId,
  borderColor,
  content,
}) => {
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
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ContentSections;
