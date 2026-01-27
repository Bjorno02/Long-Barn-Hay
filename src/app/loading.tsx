export default function Loading(): JSX.Element {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-steel-100">
      <div className="w-8 h-8 border-2 border-steel-300 border-t-barn-600 rounded-full animate-spin" />
    </div>
  );
}
