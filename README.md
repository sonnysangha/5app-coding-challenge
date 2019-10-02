# 5app-coding-challenge
To create a WebService to transform a request into an expected response

Can be tested by sending a POST request to the following webservice: 
https://us-central1-fiveappcodechallenge.cloudfunctions.net/fiveappwebservicechallenge

Example POST request to send: 
```
{
	"payload": [
		{
			"name": "Molly",
			"count": 12,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Dolly",
			"count": 1,
			"logos": [{
				"size": "128x128",
				"url": "https://example.com/128x128.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Polly",
			"count": 4,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		}
	]
}
```

Expected Request object after transformation: 
```
{
    "response": [
        {
            "name": "Molly",
            "count": 12,
            "thumbnail": "https://example.com/64x64.png"
        },
        {
            "name": "Polly",
            "count": 4,
            "thumbnail": "https://example.com/64x64.png"
        }
    ]
}
```
