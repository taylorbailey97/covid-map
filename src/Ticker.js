import React from "react";
import Ticker from "react-ticker";

const NewsTicker = (props) => {
  const length = props.articles.length - 1;
  if (props.articles.length > 0) {
    return (
      <Ticker mode="await" offset="run-in" speed={10} className="Ticker">
        {({ index = length }) => (
          <>
            <pre>
              <h1>
                <a
                  href={props.articles[index % length].url ?? "#"}
                  target="_blank"
                  className="Link"
                >
                  {" "}
                  +++ {props.articles[index % length].name ??
                    "end of news"} +++{" "}
                </a>
              </h1>
            </pre>
          </>
        )}
      </Ticker>
    );
  } else {
    return <></>;
  }
};

export default NewsTicker;
