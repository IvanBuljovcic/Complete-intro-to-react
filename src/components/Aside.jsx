/* @flow */
import React from 'react';

type Props = {
  tags: Array<Tag>,
  handleTag: Function
};

const Aside = (props: Props) => (
  <aside className="landing__aside">
    <h1>Aside component</h1>

    <form>
      {props.tags.map(tag => (
        <div key={tag.id} className="aside__tag">
          <label htmlFor={`tag_${tag.name}`}>
            <input
              type="checkbox"
              value={tag.name}
              id={`tag_${tag.name}`}
              onChange={props.handleTag}
              name="aside_tag"
            />
            {tag.name}
          </label>
        </div>
      ))}
    </form>
  </aside>
);

export default Aside;
