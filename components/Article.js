import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

const defaultJSONData = {
	source: {
		id: 'fox-news',
		name: 'Fox News'
	},
	author: null,
	title:
		"Jeff Bezos' investigator believes 'government entity' may have obtained texts: WashPo reporter - Fox News",
	description:
		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday.',
	url:
		'https://www.foxnews.com/tech/jeff-bezos-investigator-believes-government-entity-obtained-texts-wapo-reporter',
	urlToImage:
		'https://media2.foxnews.com/BrightCove/694940094001/2019/02/08/694940094001_5999770984001_5999767526001-vs.jpg',
	publishedAt: '2019-02-08T07:52:57Z',
	content:
		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… [+1410 chars]'
};

class Article extends Component {

    state = {
        article: defaultJSONData
    };
    componentDidMount = () => {
        this.setState({article: this.props.article})
    }
    render() {
        const time = moment(this.state.article.publishedAt || moment.now).fromNow();
        
        return (
            <TouchableHighlight>
				<Card
					featuredTitle={this.state.article.title}
					featuredTitleStyle={{
						marginHorizontal: 5,
						textShadowColor: '#00000f',
						textShadowOffset: { width: 3, height: 3 },
						textShadowRadius: 3
					}}
					image={{
						uri:this.state.article.urlToImage ? this.state.article.urlToImage : ''
					}}
				>
					<Text style={{ marginBottom: 10 }}>
						{this.state.article.description || 'Read more...'}
					</Text>
					<Divider style={{ backgroundColor: '#dfe6e9' }} />
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{this.state.article.source.name.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{time}
						</Text>
					</View>
				</Card>
			</TouchableHighlight>
        );
    }
}

export default Article;