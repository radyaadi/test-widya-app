export default function FormErrorMessage({ error }: { error: any }) {
  return (
    error && (
      <p className="mt-1 text-sm text-red-500">{error.message?.toString()}</p>
    )
  );
}
