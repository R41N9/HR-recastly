var VideoListEntry = () => /*#__PURE__*/React.createElement("div", {
  className: "video-list-entry media"
}, /*#__PURE__*/React.createElement("div", {
  className: "media-left media-middle"
}, /*#__PURE__*/React.createElement("img", {
  className: "media-object",
  src: "https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg",
  alt: ""
})), /*#__PURE__*/React.createElement("div", {
  className: "media-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "video-list-entry-title"
}, "Video Title"), /*#__PURE__*/React.createElement("div", {
  className: "video-list-entry-detail"
}, "Video Description"))); // PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
}; // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BUeXBlcyIsInZpZGVvIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBYyxHQUFHLG1CQUNuQjtBQUFLLEVBQUEsU0FBUyxFQUFDO0FBQWYsZ0JBQ0U7QUFBSyxFQUFBLFNBQVMsRUFBQztBQUFmLGdCQUNFO0FBQUssRUFBQSxTQUFTLEVBQUMsY0FBZjtBQUE4QixFQUFBLEdBQUcsRUFBQyxnREFBbEM7QUFBbUYsRUFBQSxHQUFHLEVBQUM7QUFBdkYsRUFERixDQURGLGVBSUU7QUFBSyxFQUFBLFNBQVMsRUFBQztBQUFmLGdCQUNFO0FBQUssRUFBQSxTQUFTLEVBQUM7QUFBZixpQkFERixlQUVFO0FBQUssRUFBQSxTQUFTLEVBQUM7QUFBZix1QkFGRixDQUpGLENBREYsQyxDQVlBO0FBQ0E7OztBQUNBQSxjQUFjLENBQUNDLFNBQWYsR0FBMkI7QUFDekJDLEVBQUFBLEtBQUssRUFBRUMsU0FBUyxDQUFDQyxNQUFWLENBQWlCQztBQURDLENBQTNCLEMsQ0FJQTtBQUNBOztBQUNBLGVBQWVMLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9MaXN0RW50cnkgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8xdzhaMFVPWFZhWS9kZWZhdWx0LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIj5WaWRlbyBUaXRsZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LWRldGFpbFwiPlZpZGVvIERlc2NyaXB0aW9uPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0RW50cnk7XG4iXX0=