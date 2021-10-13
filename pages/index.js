// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import Page from "../components/Page";
import Layout from "../components/Layout";

export default function Home({ story, preview }) {
  // the Storyblok hook to enable live updates
  story = useStoryblok(story, preview);

  return (
    <div>
      <main>
        {story ? (
          <Layout>
            <Page content={story.content} />
          </Layout>
        ) : null}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let slug = "home";
  let params = {
    version: "draft", // or 'published'
    resolve_relations: "featured-articles.articles",
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
