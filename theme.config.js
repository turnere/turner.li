const YEAR = new Date().getFullYear();

import { Tabs } from 'nextra/components'

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Eric Turner.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};

