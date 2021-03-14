import React from 'react';
import { connect } from 'react-redux';

import StudentDataTable from '../../../components/home/teacher/studentDataTable';

const Home = (props) => {
  const { studnetData } = props;

  return (
    <div>
      <StudentDataTable customers={studnetData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  studnetData: state.rootReducer.studnetData,
});

export default connect(mapStateToProps)(Home);
