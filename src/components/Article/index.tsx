import Title from "../Title";
import Text from "../Text";
import styles from "./Article.module.scss";
import Button from "../Button";
import giftingOne from "../../assets/images/gifting/1.png";
import giftingTwo from "../../assets/images/gifting/2.png";
import ArrowRight from "./assets/ArrowRight";

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
          <Text>View Details</Text>
          <ArrowRight />
        </Button>
      </div>
      <div className={styles.articleImage}>
        <img src={imgSrc} alt={imgAltText} />
      </div>
    </article>
  );
};

interface ContentSectionProps {
  sectionId: string;
  borderColor: "orange";
}

const ContentSections: React.FC<ContentSectionProps> = ({
  sectionId,
  borderColor,
}) => {
  interface ArticleData {
    id: string;
    titleText: string;
    titleBody: string;
    articleLink: string;
    imgSrc: string;
    imgAltText: string;
  }

  const contentDataList: ArticleData[] = [
    {
      id: "shdaljfhaklfdjksfjk",
      titleText: "Toys perfect for birthday gift-giving season in Spring",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: giftingOne,
      imgAltText:
        "Image of a woman and a little boy both looking at phone held by the woman",
    },
    {
      id: "fanklsnuwbnruvf",
      titleText: "Gifts for Mom",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: giftingTwo,
      imgAltText: "Image of a woman holding tools and behind a lego spaceship",
    },
  ];

  return (
    <>
      <section className={styles.sectionContainer}>
        <header id={sectionId} className={styles.sectionHeader}>
          <div className={styles.sectionHeaderContainer}>
            <Title level={4} className={styles[`border-${borderColor}`]}>
              GIFTING
            </Title>
            <Text type="regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        </header>
        <div
          className={`${styles.relativeBox} ${styles[`border-${borderColor}`]}`}
        >
          {contentDataList.map(
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
