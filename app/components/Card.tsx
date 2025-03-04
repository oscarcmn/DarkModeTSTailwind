interface CardProps {
  title: string;
  content: string;
  list?: string[];
}

function Card({ title, content, list }: CardProps) {
  return (
    <div className="bg-white dark:bg-card-bg-dark p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{content}</p>
      {list && (
        <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Card;
