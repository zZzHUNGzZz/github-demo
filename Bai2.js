function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
export default function Gallery() {
  return (
    <section>
      <h1>Các nhà khoa học tuyệt vời</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}