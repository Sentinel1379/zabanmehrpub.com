export default function GermanBooks(props) {

  return (
    <ul className="German-books-mob" style={{display : props.activeItem2 ? "block" : "none"}}>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>خودآموزهای آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب های آزمون آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب داستان آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب داستان دوزبانه آلمانی-فارسی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب رمان آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>دیکشنری آلمانی</a>
      </li>
      <li className="German-books-item-mob">
        <a href="//" style={{width : "100%"}}>نرم افزار و انیمیشن آلمانی</a>
      </li>
    </ul>
  );
}