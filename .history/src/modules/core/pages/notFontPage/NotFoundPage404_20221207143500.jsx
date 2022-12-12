import './NotFoundPage404.scss';

const NotFoundPage404 = () => {
  return (
    <>
      <div className="not_found_container">
        <div className="not_found_flex">
          <div className="not_found_info">
            <div>
              <h1>404 PAGE NOT FOUND</h1>
              <h3>Not even the Eye of Uatu sees you request...</h3>
              <p>
                Check that you tiped the address correctly, go back to your previus page or try
                using our site searchg to find something specific.
              </p>
            </div>
          </div>
          <div className="not_found_img">
            <img classNamesrc="/images/black-widow.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage404;
