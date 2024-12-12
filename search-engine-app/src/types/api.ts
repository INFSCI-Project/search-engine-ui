interface SearchQueryResponseType {
  agg_data: {
    "tga-agg": {
      doc_content: number;
      labels: {
        buckets: {
          doc_count: number;
          key: string;
        }[];
        doc_count_error_upper_bound: number;
        sum_other_doc_count: number;
      };
    };
    query: string;
    results: {
      id: string;
      score: number;
      source: {
        abstract: string;
        title: string;
      };
    }[];
  };
}

export { type SearchQueryResponseType };
