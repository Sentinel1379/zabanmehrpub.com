export default function ItalianBooks(props) {

    return (
      <ul className="Italian-books-mob" style={{display : props.activeItem5 ? "block" : "none"}}>
        <li className="Italian-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان ایتالیایی</a>
        </li>
        <li className="Italian-books-item-mob">
          <a href="//" style={{width : "100%"}}>خودآموزهای ایتالیایی</a>
        </li>
        <li className="Italian-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب داستان و رمان ایتالیایی</a>
        </li>
        <li className="Italian-books-item-mob">
          <a href="//" style={{width : "100%"}}>دیکشنری ایتالیایی</a>
        </li>
        <li className="Italian-books-item-mob">
          <a href="//" style={{width : "100%"}}>نرم افزار و انیمیشن ایتالیایی</a>
        </li>
      </ul>
    );
  }