export default function CollectionBooks(props) {

    return (
      <ul className="Collection-of-books-mob" style={{display : props.activeItem8 ? "block" : "none"}}>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب American English File</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب Oxford Word Skills</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب Tactics for Listening</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب Top Notch</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب Grammar in Use</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب Family and Friends</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب 4000Essential English Words</a>
        </li>
        <li className="Collection-of-books-item-mob">
          <a href="//" style={{width : "100%"}}>سوپر پک های زبانمهر</a>
        </li>
      </ul>
    );
  }