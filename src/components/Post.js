import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import HGroup from './HGroup';

export default ({ post }) => (
  <div className="post" key={post.node.frontmatter.path}>
    <Link to={post.node.frontmatter.path}>
      <div className="cover">
        <h2>{post.node.frontmatter.subtitle}</h2>
        <Img sizes={post.node.frontmatter.cover.childImageSharp.sizes} />
      </div>
      {post.node.frontmatter.devOnly ? (
        <div className="dev-only">Dev Only</div>
      ) : null}
      {/*<HGroup title={post.node.frontmatter.title} subtitle={post.node.frontmatter.subtitle} />*/}
    </Link>
  </div>
);
