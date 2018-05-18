initSidebarItems({"enum":[["ErrorKind","The kind of an error."],["SegmentComponent","Enum describing each component of a tantivy segment. Each component is stored in its own file, using the pattern `segment_uuid`.`component_extension`, except the delete component that takes an `segment_uuid`.`delete_opstamp`.`component_extension`"],["SkipResult","Expresses the outcome of a call to `DocSet`'s `.skip_next(...)`."]],"fn":[["i64_to_u64","Maps a `i64` to `u64`"],["u64_to_i64","Reverse the mapping given by `i64_to_u64`."],["version","Expose the current version of tantivy, as well whether it was compiled with the simd compression."]],"macro":[["doc","`doc!` is a shortcut that helps building `Document` objects."]],"mod":[["collector","Defines how the documents matching a search query should be processed."],["directory","WORM directory abstraction."],["fastfield","Column oriented field storage for tantivy."],["fieldnorm","The fieldnorm represents the length associated to a given Field of a given document."],["merge_policy","Defines tantivy's merging strategy"],["postings","Postings module (also called inverted index)"],["query","Query"],["schema","Schema definition for tantivy's indices."],["store","Compressed/slow/row-oriented storage for documents."],["termdict","The term dictionary main role is to associate the sorted `Term`s to a `TermInfo` struct that contains some meta-information about the term."],["tokenizer","Tokenizer are in charge of chopping text into a stream of tokens ready for indexing."]],"struct":[["DocAddress","`DocAddress` contains all the necessary information to identify a document given a `Searcher` object."],["Document","Tantivy's Document is the object that can be indexed and then searched for."],["Error","The Error type."],["Index","Search Index"],["IndexWriter","`IndexWriter` is the user entry-point to add document to an index."],["InvertedIndexReader","The inverted index reader is in charge of accessing the inverted index associated to a specific field."],["Searcher","Holds a list of `SegmentReader`s ready for search."],["Segment","A segment is a piece of the index."],["SegmentId","Uuid identifying a segment."],["SegmentMeta","`SegmentMeta` contains simple meta information about a segment."],["SegmentReader","Entry point to access all of the datastructures of the `Segment`"],["Term","Term represents the value that the token can take."]],"trait":[["Directory","Write-once read many (WORM) abstraction for where tantivy's data should be stored."],["DocSet","Represents an iterable set of sorted doc ids."],["Postings","Postings (also called inverted list)"],["ResultExt","Additional methods for `Result`, for easy interaction with this crate."]],"type":[["DocId","A `u32` identifying a document within a segment. Documents have their `DocId` assigned incrementally, as they are added in the segment."],["Result","Tantivy result."],["Score","A f32 that represents the relevance of the document to the query"],["SegmentLocalId","A `SegmentLocalId` identifies a segment. It only makes sense for a given searcher."]]});