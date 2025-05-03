interface PageProps {
  params: Promise<{videoId: string}>
}

export default async function Page({ params }: PageProps) {
  const { videoId } = await params;
  console.log("server component")
  return (
    <div>
      Video Id page: {videoId}
    </div>
  );
}
