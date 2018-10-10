function Item() {
  return (
    <a href="#">
      <figure><img src="https://placehold.jp/300x200.png" alt="アイテム1" /></figure>
        <div className="item-card">
          <p className="label label-new">NEW</p>
          <h4>テキスト1</h4>
          <p className="expired">テキスト1</p>
        </div>
    </a>
  );
}
export default Item;