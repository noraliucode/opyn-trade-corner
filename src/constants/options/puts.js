/* eslint-disable import/prefer-default-export */
import * as tokens from '../tokens';

export const eth_puts = [
	// {
	// 	addr: '0x48ab8a7d3bf2eb942e153e4275ae1a8988238dc7',
	// 	title: 'ETH Put $100 04/03/20',

	// 	// constants in contract
	// 	symbol: 'oETH $100 Put',
	// 	name: 'Opyn ETH Put $100 04/03/20',
	// 	decimals: 8,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1e-6,
	// 	strikePriceInUSD: 100,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x30651Fc7F912f5E40AB22F3D34C2159431Fb1c4F',
	// 	expiry: 1585958340
	// },
	// {
	// 	addr: '0x6c79f10543c7886c6946b8a996f824e474bac8f2',
	// 	title: 'ETH Put $100 04/24/20',

	// 	// constants in contract
	// 	symbol: 'oETH $100 Put',
	// 	name: 'Opyn ETH Put $100 04/24/20',
	// 	decimals: 8,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1e-6,
	// 	strikePriceInUSD: 100,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x5734a78b1985B47dF3fbf1736c278F57c2C30983',
	// 	expiry: 1587715200
	// },
	// {
	// 	addr: '0xaefc7b368f7b536c9e5e3f342bf534931ce58584',
	// 	title: 'ETH Put $150 04/24/20',
	// 	// constants in contract
	// 	symbol: 'oETH $150 Put',
	// 	name: 'Opyn ETH Put $150 04/24/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1.5e-5,
	// 	strikePriceInUSD: 150,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0xD2840757B0DeF8fBC2A7DC990CEF75975C2d3F0e',
	// 	expiry: 1587715200
	// },
	// {
	// 	addr: '0x461cd647add2159e85ad57141cb5371566fceed3',
	// 	title: 'ETH Put $160 05/01/20',

	// 	// constants in contract
	// 	symbol: 'oETH $160 Put',
	// 	name: 'Opyn ETH Put $160 05/01/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1.6e-5,
	// 	strikePriceInUSD: 160,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0xd03f7298aE74a8618711Ec43F45Ad2225F141aa4',
	// 	expiry: 1588320000
	// },
	// {
	// 	addr: '0xd79ab5a71fa2099ef30df0e8a81f8c200aac36f1',
	// 	title: 'ETH Put $200 05/08/20',
	// 	type: 'put',

	// 	symbol: 'oETH $200 Put',
	// 	name: 'Opyn ETH Put $200 05/08/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 2e-5,
	// 	strikePriceInUSD: 200,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x05c0Fd229017b40CaDbffeDEd73ceaeac68Fa4C2',
	// 	expiry: 1588924800
	// },
	// {
	// 	addr: '0x684a1d736e934a45f6f5d00c62ddf7a0b7d2064b',
	// 	title: 'ETH Put $200 05/15/20',
	// 	type: 'put',

	// 	symbol: 'oETH $200 Put',
	// 	name: 'Opyn ETH Put $200 05/15/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 2e-5,
	// 	strikePriceInUSD: 200,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0xA7f55C14200136343450B93067d587D112EB7c54',
	// 	expiry: 1589529600
	// },
	// {
	// 	addr: '0xecf6f2fd8d2a8e17397066348d449566d5407174',
	// 	title: 'ETH Put $150 05/29/20',
	// 	type: 'put',

	// 	// constants in contract
	// 	symbol: 'oETH $150 Put',
	// 	name: 'Opyn ETH Put $150 05/29/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1.5e-5,
	// 	strikePriceInUSD: 150,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x75B865EA22a2b6633038E15647357268C7F9Ac54',
	// 	expiry: 1590739200
	// },
	// {
	// 	addr: '0x750aea5fbcd4986f1390ef4d2b98ecce690061fa',
	// 	title: 'ETH Put $180 05/15/20',
	// 	type: 'put',
	// 	symbol: 'oETH $180 Put',
	// 	name: 'Opyn ETH Put $180 05/15/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 1.8e-5,
	// 	strikePriceInUSD: 180,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x98686D724cC49DC58Ac5366fA268CCC968B1227d',
	// 	expiry: 1589529600
	// },
	// {
	// 	addr: '0xb036f902ff0e7847a6f2be49045a10ce55a9aa87',
	// 	title: 'ETH Put $200 05/22/20',
	// 	type: 'put',
	// 	symbol: 'oETH $200 Put',
	// 	name: 'Opyn ETH Put $200 05/22/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 2e-5,
	// 	strikePriceInUSD: 200,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0x1D8D9FF60C8C2a579215CA4a8b44a72D01F15B3e',
	// 	expiry: 1590134400
	// },
	// {
	// 	addr: '0x7cac16770dd5f2a59859a395a492224f05a846b6',
	// 	title: 'ETH Put $200 05/29/20',
	// 	type: 'put',
	// 	symbol: 'oETH $200 Put',
	// 	name: 'Opyn ETH Put $200 05/29/20',
	// 	decimals: 7,
	// 	oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
	// 	collateral: tokens.USDC,
	// 	underlying: tokens.OPYN_ETH,
	// 	strike: tokens.USDC,
	// 	strikePrice: 2e-5,
	// 	strikePriceInUSD: 200,
	// 	minRatio: 1,
	// 	exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
	// 	uniswapExchange: '0xD3760EDFFB3289fA817D9aE6ceEc126902BA2905',
	// 	expiry: 1590739200
	// },
	{
		addr: '0x4edf4f93a45fad46e5a2450bfcffe8ff53d0a5b2',
		title: 'ETH Put $200 06/05/20',
		type: 'put',
		symbol: 'oETH $200 Put',
		name: 'Opyn ETH Put $200 06/05/20',
		decimals: 7,
		oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
		collateral: tokens.USDC,
		underlying: tokens.OPYN_ETH,
		strike: tokens.USDC,
		strikePrice: 2e-5,
		strikePriceInUSD: 200,
		minRatio: 1,
		exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
		uniswapExchange: '0xeb2cc32F4b1D8e498619be6960030FdfFb1e7C47',
		expiry: 1591344000
	},
	{
		addr: '0xd48723715cc1ca4fb10427a9a298094ec1e08adb',
		title: 'ETH Put $180 06/26/20',
		type: 'put',
		symbol: 'oETH $180 Put',
		name: 'Opyn ETH Put $180 06/26/20',
		decimals: 7,
		oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
		collateral: tokens.USDC,
		underlying: tokens.OPYN_ETH,
		strike: tokens.USDC,
		strikePrice: 1.8e-5,
		strikePriceInUSD: 180,
		minRatio: 1,
		exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
		uniswapExchange: '0x9Aa024660E4eF86732D9e3667FD58eb8334AbD52',
		expiry: 1593158400
	}
];
