import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { InstantSearch, SearchBox, Hits, Stats, Pagination } from 'react-instantsearch/dom';

import AlgoliaIcon from '!svg-react-loader!../../images/svg-icons/algolia-full.svg?name=AlgoliaIcon';
import Hit from './Hit';

const styles = theme => ({
  algoliaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -46,
    fontSize: 14,
    color: '#999'
  },
  mark: {
    display: 'inline-block',
    width: 60,
    display: 'block',
    margin: '0 0 0 5px'
  },
  search: {
    marginTop: '-1em',
    '& .ais-InstantSearch': {
      root: {
        font: theme.base.fonts.styledFamily
      }
    },
    '& .ais-SearchBox': {
      width: '100%'
    },
    '& .ais-SearchBox-form': {
      position: 'relative',
      borderBottom: '1px solid #aaa',
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& .ais-SearchBox-input': {
      border: 'none',
      font: theme.base.fonts.styledFamily,
      padding: '.2em',
      fontSize: '1.4em',
      flexGrow: 1
    },
    '& .ais-SearchBox-submit, & .ais-SearchBox-reset': {
      background: 'none',
      border: 'none',
      fill: '#666',
      flexGrow: 0
    },
    '& .ais-Stats': {
      margin: '.5em 0 2em .3em',
      fontSize: '.9em',
      color: '#999',
      display: 'block'
    },
    '& .ais-Hits-list': {
      listStyle: 'none',
      padding: 0
    },
    '& .ais-Pagination-list': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      padding: 0
    },
    '& .ais-Pagination-item': {
      '& a, & span': {
        color: '#666',
        fontSize: '1.2em',
        display: 'block',
        padding: '.5em .5em 2em',
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
          fontSize: '1.3em',
          padding: '.5em .7em 0'
        }
      },
      '& a': {
        '&:hover': {
          color: theme.base.colors.accent
        }
      },
      '&.ais-Pagination-item--firstPage, &.ais-Pagination-item--previousPage, &.ais-Pagination-item--nextPage': {
        '& a, & span': {
          padding: '.4em .5em .6em',
          [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            padding: '.4em .7em .6em'
          }
        }
      }
    },
    '& a': {
      fontWeight: 400
    }
  }
});

const Search = props => {
  const { classes, algolia } = props;

  return (
    <div className={classes.search}>
      {algolia && algolia.appId && (
        <InstantSearch appId={algolia.appId} apiKey={algolia.searchOnlyApiKey} indexName={algolia.indexName}>
          <SearchBox translations={{ placeholder: '' }} />
          <Stats style={{ marginBottom: 0 }} />
          {/* <div className={classes.algoliaRow}>
            <div>Search by</div>
            <div>
              <a className={classes.mark} href="https://www.algolia.com" rel="noopener noreferrer" target="_blank">
                <AlgoliaIcon />
              </a>
            </div>
          </div> */}
          <Hits hitComponent={Hit} />
          <Pagination />
        </InstantSearch>
      )}
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  algolia: PropTypes.object.isRequired
};

export default injectSheet(styles)(Search);
