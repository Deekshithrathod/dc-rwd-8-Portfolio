import "./BlogCard.css";
import { orientationProp } from "../../common/commonType";

export interface Blog {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

type BlogProps = Blog & orientationProp;

const BlogCard = ({
  orientation,
  title,
  description,
  link,
  imageUrl,
}: BlogProps) => {
  return (
    <div className={`blog-card-${orientation}`}>
      <div className="blog-details">
        <div className="blog-tag">Blog</div>
        <div className="blog-title">{title}</div>
        <div className="blog-desc">
          {orientation === "horizontal"
            ? description.slice(0, 200)
            : description.slice(0, 100)}
          ...
        </div>
        <div className="blog-link">
          <a href="#">{link}</a>
        </div>
      </div>
      <div className="blog-image">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default BlogCard;
