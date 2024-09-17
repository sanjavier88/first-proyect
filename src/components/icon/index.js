import Heart from "./heart";
import Branch from "./branch";
import Home from "./home";
import ArrowDown from "./arrow-down";
import Cancel from "./cancel";
import Check from "./check";
import Book from "./book";
import Github from "./github";
import User from "./user";
import Link from "./link";
import Location from "./location";
import Search from "./search";
import Star from "./star";
import Twitter from "./twitter";

function Index({ name, ...props }) {
  switch (name) {
    case "heart": {
      return <Heart {...props} />;
    }
    case "branch": {
      return <Branch {...props} />;
    }
    case "home": {
      return <Home {...props} />;
    }
    case "arrow-down": {
      return <ArrowDown {...props} />;
    }
    case "cancel": {
      return <Cancel {...props} />;
    }
    case "check": {
      return <Check {...props} />;
    }
    case "book": {
      return <Book {...props} />;
    }
    case "github": {
      return <Github {...props} />;
    }
    case "user": {
      return <User {...props} />;
    }
    case "link": {
      return <Link {...props} />;
    }
    case "location": {
      return <Location {...props} />;
    }
    case "search": {
      return <Search {...props} />;
    }
    case "star": {
      return <Star {...props} />;
    }
    case "twitter": {
      return <Twitter {...props} />;
    }
    default: {
      return null;
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: "white",
};

export default Index;
