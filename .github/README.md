# :earth_africa: cf-ip

Get your IP address in plaintext. Powered by [Cloudflare Workers](https://workers.dev).

[![Deploy Cloudflare Worker](https://github.com/Strappazzon/cf-ip/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/Strappazzon/cf-ip/actions/workflows/deploy.yml)

## Usage

<table>
<tr>
<td> On Linux and <a href="https://docs.microsoft.com/en-us/windows/wsl/about">WSL</a> </td> <td> On Windows </td>
</tr>
<tr>
<td>

```bash
curl ip.strappazzon.xyz
```

</td>
<td>
    
```ps1
Invoke-WebRequest 'ip.strappazzon.xyz' | Select-Object -Expand Content
```
  
</td>
</tr>
</table>

## Deploy

1. [Create](https://dash.cloudflare.com/sign-up) a Cloudflare account
2. On your account home look at the right side of the page and click "**Workers**"
3. Click "**Create Worker**"
4. (Optional) Change the URL by clicking on the text box at the top left corner of the page
5. Paste the content of `src/ip.js` from this repo to the **Script** tab
6. Click "**Save and Deploy**"
