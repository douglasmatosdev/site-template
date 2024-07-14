import PostPreview from './PostPreview'

interface PostsPreviewListProps {
    description: string
    allPosts: Post[]
}

export default function PostsPreviewList(props: PostsPreviewListProps): JSX.Element {
    const renderAllPosts = (): Iterable<React.ReactNode> => {
        return props.allPosts.map((post, index) => {
            return (
                <PostPreview
                    key={index}
                    index={index}
                    href={`/blog/${post.slug}/`}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    // stats={post.stats}
                    content={post.content}
                />
            )
        })
    }

    return (
        <div className="flex flex-col w-full">
            <p dangerouslySetInnerHTML={{ __html: props.description }} />

            <h2 className="mb-6">All Posts</h2>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start md:flex-wrap md:gap-5">
                {renderAllPosts()}
            </div>
        </div>
    )
}
