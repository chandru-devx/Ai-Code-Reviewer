import EditorPanel from "../features/editor/EditorPanel"
import ReviewPanel from "../features/review/ReviewPanel"
const ReviewCode = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 h-full min-h-0">
      <EditorPanel />
      <ReviewPanel />
    </div>
  );
};
export default ReviewCode