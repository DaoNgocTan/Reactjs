import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {


        return (
            <div className='home-footer'>
                <p>&copy; 2023 MedicTeeths with Dao Ngoc Tan. More infor, please direct Ig: only.dntan.
                    <a target='_blank' href='https://www.instagram.com/__only.dntan/'>
                        &#8594; Click Here &#8592;</a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
