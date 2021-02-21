import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './Grid.scss';

import API from 'services/api';
import { ElderScrollCardInterface } from 'models/ElderScrollsModel';
import ElderScrollsCard from 'components/card/ElderScrollsCard';
import Emoji from 'components/emoji/Emoji';
import Loader from 'components/loader/Loader';
import QuerySearch from 'components/query-search/QuerySearch';


export const Grid: React.FunctionComponent = () => {
  const [renderedCards, setRenderedCards] = useState<ReadonlyArray<ElderScrollCardInterface>>([]);
  const [totalCards, setTotalCards] = useState<number | undefined>();
  const [nextPage, setNextPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  // pull initial card data
  useEffect(() => {
    fetchData();
  }, []);

  // observe handleQuerySearch, fetchData on expected change completion
  useEffect(() => {
    if (nextPage === 1 && renderedCards.length === 0 && (!!query && !!totalCards || totalCards === 0)) {
      fetchData();
    }
  }, [nextPage, query, renderedCards, totalCards])

  // fetch and set card data
  const fetchData = useCallback(async () => {
    if (!nextPage) {
      return;
    }

    const apiResponse = await API.ElderScrolls.getCards(nextPage, query);
    setRenderedCards(renderedCards.concat(apiResponse?.cards));
    setTotalCards(apiResponse?._totalCount);
    setNextPage(apiResponse?._links?.next ? nextPage + 1 : 0);
  }, [nextPage, renderedCards, setNextPage, setRenderedCards, setTotalCards]);

  const handleQueryChange = useCallback((e: any) => setQuery(e.target.value), [setQuery])

  const handleQuerySearch = useCallback(() => {
    setNextPage(1);
    setRenderedCards([]);
  }, [setNextPage, setRenderedCards])

  const celebrateEmoji = <Emoji label='celebrate' symbol="🎉"/>
  const poopEmoji = <Emoji label='poop' symbol="💩"/>;

  return (
    <div id="grid" data-component="Grid">
      <h1>Elder Scrolls Cards</h1>
      <QuerySearch value={query} handleChange={handleQueryChange} handleSearch={handleQuerySearch} />
      <hr />

      {totalCards === 0 ? (
        <div className='message'>
          <b>{poopEmoji} No search results {poopEmoji}</b>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={renderedCards.length}
          next={fetchData}
          hasMore={!!nextPage}
          loader={<Loader />}
          endMessage={
            <div className='message'>
              <b>{celebrateEmoji} Yay! You have seen it all {celebrateEmoji}</b>
            </div>
          }
        >
          {renderedCards.map((card, index) => (
            <ElderScrollsCard card={card} key={`es-card-${index}`}/>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Grid;
