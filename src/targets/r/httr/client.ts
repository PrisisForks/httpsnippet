/**
 * @description
 * HTTP code snippet generator for R using httr
 *
 * @author
 * @gabrielakoreeda
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */
import type { Client } from '../../targets';

import { CodeBuilder } from '../../../helpers/code-builder';
import { escapeForDoubleQuotes, escapeForSingleQuotes } from '../../../helpers/escape';
import { getHeader } from '../../../helpers/headers';

export const httr: Client = {
  info: {
    key: 'httr',
    title: 'httr',
    link: 'https://cran.r-project.org/web/packages/httr/vignettes/quickstart.html',
    description: 'httr: Tools for Working with URLs and HTTP',
  },
  convert: ({ url, queryObj, queryString, postData, allHeaders, method }) => {
    // Start snippet
    const { push, blank, join } = new CodeBuilder();

    // Import httr
    push('library(httr)');
    blank();

    // Set URL
    push(`url <- "${url}"`);
    blank();

    // Construct query string
    const qs = queryObj;
    delete queryObj.key;

    const queryCount = Object.keys(qs).length;
    if (queryString.length === 1) {
      push(`queryString <- list(${Object.keys(qs)} = "${Object.values(qs).toString()}")`);
      blank();
    } else if (queryString.length > 1) {
      push('queryString <- list(');

      Object.keys(qs).forEach((query, i) => {
        if (i !== queryCount - 1) {
          push(`  ${query} = "${qs[query].toString()}",`);
        } else {
          push(`  ${query} = "${qs[query].toString()}"`);
        }
      });

      push(')');
      blank();
    }

    // Construct payload
    const payload = JSON.stringify(postData.text);

    if (payload) {
      push(`payload <- ${payload}`);
      blank();
    }

    // Define encode
    if (postData.text || postData.jsonObj || postData.params) {
      switch (postData.mimeType) {
        case 'application/x-www-form-urlencoded':
          push('encode <- "form"');
          blank();
          break;

        case 'application/json':
          push('encode <- "json"');
          blank();
          break;

        case 'multipart/form-data':
          push('encode <- "multipart"');
          blank();
          break;

        default:
          push('encode <- "raw"');
          blank();
          break;
      }
    }

    // Construct headers
    const cookieHeader = getHeader(allHeaders, 'cookie');
    const acceptHeader = getHeader(allHeaders, 'accept');

    const setCookies = cookieHeader
      ? `set_cookies(\`${String(cookieHeader).replace(/;/g, '", `').replace(/` /g, '`').replace(/[=]/g, '` = "')}")`
      : undefined;

    const setAccept = acceptHeader ? `accept("${escapeForDoubleQuotes(acceptHeader)}")` : undefined;

    const setContentType = `content_type("${escapeForDoubleQuotes(postData.mimeType)}")`;

    const otherHeaders = Object.entries(allHeaders)
      // These headers are all handled separately:
      .filter(([key]) => !['cookie', 'accept', 'content-type'].includes(key.toLowerCase()))
      .map(([key, value]) => `'${key}' = '${escapeForSingleQuotes(value)}'`)
      .join(', ');

    const setHeaders = otherHeaders ? `add_headers(${otherHeaders})` : undefined;

    // Construct request
    let request = `response <- VERB("${method}", url`;

    if (payload) {
      request += ', body = payload';
    }

    if (queryString.length) {
      request += ', query = queryString';
    }

    const headerAdditions = [setHeaders, setContentType, setAccept, setCookies].filter(x => !!x).join(', ');

    if (headerAdditions) {
      request += `, ${headerAdditions}`;
    }

    if (postData.text || postData.jsonObj || postData.params) {
      request += ', encode = encode';
    }

    request += ')';

    push(request);

    blank();
    // Print response
    push('content(response, "text")');

    return join();
  },
};
