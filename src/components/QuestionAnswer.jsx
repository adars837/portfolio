import Answer from './Answers';

const QuestionAnswer = ({ item, index }) => {
  return (
    <div key={index} className={`flex ${item.type === 'q' ? 'justify-end' : 'justify-start'} transition-all`}>
      {item.type === 'q' ? (
        <li
          className="
            text-right p-3 bg-gradient-to-r from-red-200 to-pink-100 dark:bg-zinc-700
            rounded-tl-3xl rounded-br-3xl rounded-bl-3xl max-w-[80%] w-fit
            shadow-md dark:shadow-lg transition-transform
          "
        >
          <Answer ans={item.text} totalResult={1} index={index} type={item.type} />
        </li>
      ) : (
        <li
          className="
            text-left p-3 bg-zinc-100 dark:bg-zinc-700
            rounded-tr-3xl rounded-bl-3xl rounded-br-3xl max-w-[80%] w-fit
            shadow-md dark:shadow-lg mb-2
          "
        >
          {item.loading ? (
            <div className="flex justify-center my-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M100 50.5908C100..."
                />
                <path
                  fill="currentFill"
                  d="M93.9676 39.0409C96.393..."
                />
              </svg>
            </div>
          ) : (
            item.text.map((ansItem, ansIndex) => (
              <Answer key={ansIndex} ans={ansItem} totalResult={item.text.length} index={ansIndex} type={item.type} />
            ))
          )}
        </li>
      )}
    </div>
  );
};

export default QuestionAnswer;

