import React from 'react';

export const Goals = () => {
  return (
    <div>
      <h1>Goals</h1>
      <ul>
        <li>
          <strong>Dynamic Data Rendering:</strong> The table component must be
          capable of rendering any given array of objects dynamically (generic
          data rendering), provided each object in the array shares the same
          structure. While mock data is provided as an example, the table should
          be designed to accommodate and display any type of structured data,
          not just the specific example given.
        </li>
        <li>
          <strong>Type Safety:</strong> Ensure the table component is fully
          typed, utilizing TypeScript to define the structure of the expected
          data.
        </li>
      </ul>
      <h2>How to Submit The Challenge</h2>
      <ol>
        <li>
          Click the "Fork" button in the top-right corner to create your own
          copy of the project.
        </li>
        <li>
          Make your changes and implement the required features in your forked
          version.
        </li>
        <li>
          Once finished, click the "Share" button in the top-right corner.
        </li>
        <li>Copy the "Editor URL" from the sharing dialog.</li>
        <li>
          Send this URL to the recruiter in your submission email or through the
          specified submission method.
        </li>
      </ol>
    </div>
  );
};
