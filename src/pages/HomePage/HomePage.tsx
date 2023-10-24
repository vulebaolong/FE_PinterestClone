import MasonryLayout from "./MasonryLayout";

function HomePage() {
    const items = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        // Thêm các mục khác tại đây
    ];
    return (
        <div className="container">
            <p className="text-base font-semibold text-center text-text">Dành cho bạn</p>
            <MasonryLayout items={items} />
        </div>
    );
}
export default HomePage;
