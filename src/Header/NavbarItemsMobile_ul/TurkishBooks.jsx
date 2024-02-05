export default function TurkishBooks(props) {

    return (
      <ul className="Turkish-books-mob" style={{display : props.activeItem4 ? "block" : "none"}}>
        <li className="Turkish-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان ترکی</a>
        </li>
        <li className="Turkish-books-item-mob">
          <a href="//" style={{width : "100%"}}>خودآموزهای ترکی</a>
        </li>
        <li className="Turkish-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب داستان و رمان ترکی</a>
        </li>
        <li className="Turkish-books-item-mob">
          <a href="//" style={{width : "100%"}}>دیکشنری ترکی</a>
        </li>
      </ul>
    );
  }