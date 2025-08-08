export default async function Page({
    params
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;
    return (
        <div>Profile  @{username}</div>
    );
}