import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {


        return (
            <div className='section-share section-about'>

                <div className='section-about-header'>
                    Liều thuốc tinh thần đặc biệt từ MedicTeeths :3
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/7DLJzUPJli4" title="5 Lời Khuyên Cần Nhớ Trước Khi Niềng Răng || Nam Bui Vinalign" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Rất nhiều người trong chúng ta đi niềng răng mà bản thân vẫn chưa hiểu và nắm hết được cần chuẩn bị những gì trước khi thực hiện quá trình điều trị, dẫn đến khi đi điều trị cảm thấy hoang mang và lo lắng rằng bản thân có thực sự đang đi đúng hướng và lạc lỗi với những thông tin không chính xác của mọi người.
                            Mình mong rằng khi xem hết video này, những lời khuyên trên sẽ giúp ích cho các bạn.
                            1. Bạn cần xác định rõ mục tiêu đi niềng răng là gì ?
                            2. Hãy tìm một địa chỉ nha khoa, bác sĩ phù hợp cho mình
                            3. Cần phải có một quy trình khám và lập phác đồ điều trị tiêu chuẩn
                            4. Đặt niềm tin vào bác sĩ điều trị.
                        </p>

                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
