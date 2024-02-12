import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  // console.log(post);

  return (
    <section className="w-full max-w-full flex_start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray(700)">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray(700)">
            Tag {` `}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        {/* <label> */}
        <div>
          <div
            className="flex items-center me-4"
            data-tooltip-target="tooltip-dark"
            // data-tooltip-trigger="bottom"
          >
            <label
              htmlFor="public-checkbox"
              className="font-satoshi text-base text-gray(700)"
            >
              Public
            </label>
            <input
              checked={post.isPublic}
              onChange={(e) => setPost({ ...post, isPublic: !post.isPublic })}
              id="public-checkbox"
              type="checkbox"
              // value=""
              className="w-4 h-4 ml-4"
            />
          </div>
          <div
            id="tooltip-dark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip on bottom
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          {/* <input
            value={post.isPublic}
            onChange={(e) => setPost({ ...post, isPublic: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          /> */}
          {/* </label> */}
        </div>

        <div className="flex_end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
