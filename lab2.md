{postsData.map((post) => (
          <Post
            key={post.id} 
            author={post.author}
            content={post.content}
            date={post.date}
            avatar={post.avatar}
          />
        ))}