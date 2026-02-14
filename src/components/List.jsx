function List({ items }) {
  return (
    <div className="flex overflow-hidden w-full gap-6 py-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center bg-zinc-400 border rounded-md border-black/10 w-full h-45"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[30rem] h-30 mb-4 w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default List;
