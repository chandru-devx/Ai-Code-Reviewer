import { useReviewStore } from "../../store/useReviewStore"

const ReviewPanel = () => {
  const { code, language, result, loading, error } = useReviewStore();

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow h-full flex flex-col">

      {/* HEADER */}
      <div className="p-4 border-b dark:border-zinc-700">
        <h2 className="font-semibold text-lg text-white">AI Review Results</h2>
      </div>

      {/* BODY */}
      <div className="flex-1 p-4 overflow-auto">

        {/* EMPTY STATE */}
        {!code && (
          <div className="text-zinc-500 text-sm">
            Paste code and click "Analyze Code"
          </div>
        )}

        {/* LOADING STATE */}
        {loading && (
          <div className="text-blue-500 animate-pulse">
            AI is analyzing your code...
          </div>
        )}

        {error && (
          <div className="text-red-500">
            {error}
          </div>
        )}


        {/* RESULT */}
        {result && (
          <div className="space-y-4">
            <div className="text-xs text-zinc-400">
              Language: {language}
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg text-sm whitespace-pre-wrap text-white">
              {result}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ReviewPanel;
