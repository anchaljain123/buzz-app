import React,{Component} from 'react'

class Options extends Component{
    constructor(){
        super();
        this.state = {
            liked:false,
        }
    }


    saveLike = (e) => {
        e.preventDefault();
        this.props.postLike();
        this.setState({
            liked:true,
        })
    };

    savedisLike = () =>{
        this.props.postdisLike();
        /* this.setState({
         liked:false,
         })*/
    };

    render(){
        const { likeData } = this.props;
        const { dislikeData } = this.props;
        let count1=0,count2=0;
        return(
            <div>
                <a className="btn btn-default btn-xs" style={{margin:'2px'}}>

                    {
                        likeData.map(item=> {
                                if (this.props.uid == item.userDetails.userid
                                    && this.props.buzzid == item.postId
                                    && item.like ==true){
                                    //disable like btn
                                }

                                else{
                                    //disable dislike btn
                                }


                            }
                        )

                    }

                    <button onClick={this.savedisLike}
                            style={{'background': 'none', 'border': 'none'}}>
                        <i className="fa fa-heart" aria-hidden="true"></i>DisLike
                    </button>
                    <button onClick={this.saveLike} style={{'background': 'none', 'border': 'none'}}>
                        <i className="fa fa-heart" aria-hidden="true"></i>Like
                    </button>

                </a>
                {/*     <a className="btn btn-default btn-xs" style={{margin:'2px'}}>
                 <button onClick={this.savedisLike} style={{'background':'none','border':'none'}}>
                 <i className="fa fa-heart" aria-hidden="true"></i>Dislike
                 </button>
                 </a>*/}
                <a className="btn btn-default btn-xs"  style={{margin:'2px'}}>
                    <i className="fa fa-comment" aria-hidden="true"></i>Comment
                </a>
            </div>
        )
    }
}

export default Options;