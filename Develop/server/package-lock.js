{
    "name": "server",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "server",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "apollo-server-express": "^2.25.3",
          "bcrypt": "^5.0.0",
          "concurrently": "^7.0.0",
          "express": "^4.17.1",
          "faker": "^6.6.6",
          "graphql": "^15.8.0",
          "jsonwebtoken": "^8.5.1",
          "mongoose": "^5.9.10"
        },
        "devDependencies": {
          "nodemon": "^2.0.3"
        }
      },
      "node_modules/@apollo/protobufjs": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/@apollo/protobufjs/-/protobufjs-1.2.2.tgz",
        "integrity": "sha512-vF+zxhPiLtkwxONs6YanSt1EpwpGilThpneExUN5K3tCymuxNnVq2yojTvnpRjv2QfsEIt/n7ozPIIzBLwGIDQ==",
        "hasInstallScript": true,
        "dependencies": {
          "@protobufjs/aspromise": "^1.1.2",
          "@protobufjs/base64": "^1.1.2",
          "@protobufjs/codegen": "^2.0.4",
          "@protobufjs/eventemitter": "^1.1.0",
          "@protobufjs/fetch": "^1.1.0",
          "@protobufjs/float": "^1.0.2",
          "@protobufjs/inquire": "^1.1.0",
          "@protobufjs/path": "^1.1.2",
          "@protobufjs/pool": "^1.1.0",
          "@protobufjs/utf8": "^1.1.0",
          "@types/long": "^4.0.0",
          "@types/node": "^10.1.0",
          "long": "^4.0.0"
        },
        "bin": {
          "apollo-pbjs": "bin/pbjs",
          "apollo-pbts": "bin/pbts"
        }
      },
      "node_modules/@apollo/protobufjs/node_modules/@types/node": {
        "version": "10.17.60",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz",
        "integrity": "sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw=="
      },
      "node_modules/@apollographql/apollo-tools": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/@apollographql/apollo-tools/-/apollo-tools-0.5.2.tgz",
        "integrity": "sha512-KxZiw0Us3k1d0YkJDhOpVH5rJ+mBfjXcgoRoCcslbgirjgLotKMzOcx4PZ7YTEvvEROmvG7X3Aon41GvMmyGsw==",
        "engines": {
          "node": ">=8",
          "npm": ">=6"
        }
      },
      "node_modules/@apollographql/graphql-playground-html": {
        "version": "1.6.27",
        "resolved": "https://registry.npmjs.org/@apollographql/graphql-playground-html/-/graphql-playground-html-1.6.27.tgz",
        "integrity": "sha512-tea2LweZvn6y6xFV11K0KC8ETjmm52mQrW+ezgB2O/aTQf8JGyFmMcRPFgUaQZeHbWdm8iisDC6EjOKsXu0nfw==",
        "dependencies": {
          "xss": "^1.0.8"
        }
      },
      "node_modules/@apollographql/graphql-upload-8-fork": {
        "version": "8.1.3",
        "resolved": "https://registry.npmjs.org/@apollographql/graphql-upload-8-fork/-/graphql-upload-8-fork-8.1.3.tgz",
        "integrity": "sha512-ssOPUT7euLqDXcdVv3Qs4LoL4BPtfermW1IOouaqEmj36TpHYDmYDIbKoSQxikd9vtMumFnP87OybH7sC9fJ6g==",
        "dependencies": {
          "@types/express": "*",
          "@types/fs-capacitor": "*",
          "@types/koa": "*",
          "busboy": "^0.3.1",
          "fs-capacitor": "^2.0.4",
          "http-errors": "^1.7.3",
          "object-path": "^0.11.4"
        },
        "engines": {
          "node": ">=8.5"
        },
        "peerDependencies": {
          "graphql": "0.13.1 - 15"
        }
      },
      "node_modules/@apollographql/graphql-upload-8-fork/node_modules/http-errors": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz",
        "integrity": "sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==",
        "dependencies": {
          "depd": "~1.1.2",
          "inherits": "2.0.4",
          "setprototypeof": "1.2.0",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.1"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/@apollographql/graphql-upload-8-fork/node_modules/inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "node_modules/@apollographql/graphql-upload-8-fork/node_modules/setprototypeof": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
        "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
      },
      "node_modules/@apollographql/graphql-upload-8-fork/node_modules/toidentifier": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
        "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
        "engines": {
          "node": ">=0.6"
        }
      },
      "node_modules/@josephg/resolvable": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/@josephg/resolvable/-/resolvable-1.0.1.tgz",
        "integrity": "sha512-CtzORUwWTTOTqfVtHaKRJ0I1kNQd1bpn3sUh8I3nJDVY+5/M/Oe1DnEWzPQvqq/xPIIkzzzIP7mfCoAjFRvDhg=="
      },
      "node_modules/@protobufjs/aspromise": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
        "integrity": "sha1-m4sMxmPWaafY9vXQiToU00jzD78="
      },
      "node_modules/@protobufjs/base64": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
        "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg=="
      },
      "node_modules/@protobufjs/codegen": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.4.tgz",
        "integrity": "sha512-YyFaikqM5sH0ziFZCN3xDC7zeGaB/d0IUb9CATugHWbd1FRFwWwt4ld4OYMPWu5a3Xe01mGAULCdqhMlPl29Jg=="
      },
      "node_modules/@protobufjs/eventemitter": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz",
        "integrity": "sha1-NVy8mLr61ZePntCV85diHx0Ga3A="
      },
      "node_modules/@protobufjs/fetch": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz",
        "integrity": "sha1-upn7WYYUr2VwDBYZ/wbUVLDYTEU=",
        "dependencies": {
          "@protobufjs/aspromise": "^1.1.1",
          "@protobufjs/inquire": "^1.1.0"
        }
      },
      "node_modules/@protobufjs/float": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
        "integrity": "sha1-Xp4avctz/Ap8uLKR33jIy9l7h9E="
      },
      "node_modules/@protobufjs/inquire": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.0.tgz",
        "integrity": "sha1-/yAOPnzyQp4tyvwRQIKOjMY48Ik="
      },
      "node_modules/@protobufjs/path": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
        "integrity": "sha1-bMKyDFya1q0NzP0hynZz2Nf79o0="
      },
      "node_modules/@protobufjs/pool": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
        "integrity": "sha1-Cf0V8tbTq/qbZbw2ZQbWrXhG/1Q="
      },
      "node_modules/@protobufjs/utf8": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.0.tgz",
        "integrity": "sha1-p3c2C1s5oaLlEG+OhY8v0tBgxXA="
      },
      "node_modules/@sindresorhus/is": {
        "version": "0.14.0",
        "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
        "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/@szmarczak/http-timer": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
        "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
        "dev": true,
        "dependencies": {
          "defer-to-connect": "^1.0.1"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/@types/accepts": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/@types/accepts/-/accepts-1.3.5.tgz",
        "integrity": "sha512-jOdnI/3qTpHABjM5cx1Hc0sKsPoYCp+DP/GJRGtDlPd7fiV9oXGGIcjW/ZOxLIvjGz8MA+uMZI9metHlgqbgwQ==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@types/body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-W98JrE0j2K78swW4ukqMleo8R7h/pFETjM2DQ90MF6XK2i4LO4W3gQ71Lt4w3bfm2EvVSyWHplECvB5sK22yFQ==",
        "dependencies": {
          "@types/connect": "*",
          "@types/node": "*"
        }
      },
      "node_modules/@types/color-name": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
        "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ=="
      },
      "node_modules/@types/connect": {
        "version": "3.4.35",
        "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.35.tgz",
        "integrity": "sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@types/content-disposition": {
        "version": "0.5.4",
        "resolved": "https://registry.npmjs.org/@types/content-disposition/-/content-disposition-0.5.4.tgz",
        "integrity": "sha512-0mPF08jn9zYI0n0Q/Pnz7C4kThdSt+6LD4amsrYDDpgBfrVWa3TcCOxKX1zkGgYniGagRv8heN2cbh+CAn+uuQ=="
      },
      "node_modules/@types/cookies": {
        "version": "0.7.7",
        "resolved": "https://registry.npmjs.org/@types/cookies/-/cookies-0.7.7.tgz",
        "integrity": "sha512-h7BcvPUogWbKCzBR2lY4oqaZbO3jXZksexYJVFvkrFeLgbZjQkU4x8pRq6eg2MHXQhY0McQdqmmsxRWlVAHooA==",
        "dependencies": {
          "@types/connect": "*",
          "@types/express": "*",
          "@types/keygrip": "*",
          "@types/node": "*"
        }
      },
      "node_modules/@types/cors": {
        "version": "2.8.10",
        "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.10.tgz",
        "integrity": "sha512-C7srjHiVG3Ey1nR6d511dtDkCEjxuN9W1HWAEjGq8kpcwmNM6JJkpC0xvabM7BXTG2wDq8Eu33iH9aQKa7IvLQ=="
      },
      "node_modules/@types/express": {
        "version": "4.17.13",
        "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.13.tgz",
        "integrity": "sha512-6bSZTPaTIACxn48l50SR+axgrqm6qXFIxrdAKaG6PaJk3+zuUr35hBlgT7vOmJcum+OEaIBLtHV/qloEAFITeA==",
        "dependencies": {
          "@types/body-parser": "*",
          "@types/express-serve-static-core": "^4.17.18",
          "@types/qs": "*",
          "@types/serve-static": "*"
        }
      },
      "node_modules/@types/express-serve-static-core": {
        "version": "4.17.28",
        "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.28.tgz",
        "integrity": "sha512-P1BJAEAW3E2DJUlkgq4tOL3RyMunoWXqbSCygWo5ZIWTjUgN1YnaXWW4VWl/oc8vs/XoYibEGBKP0uZyF4AHig==",
        "dependencies": {
          "@types/node": "*",
          "@types/qs": "*",
          "@types/range-parser": "*"
        }
      },
      "node_modules/@types/fs-capacitor": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@types/fs-capacitor/-/fs-capacitor-2.0.0.tgz",
        "integrity": "sha512-FKVPOCFbhCvZxpVAMhdBdTfVfXUpsh15wFHgqOKxh9N9vzWZVuWCSijZ5T4U34XYNnuj2oduh6xcs1i+LPI+BQ==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@types/http-assert": {
        "version": "1.5.3",
        "resolved": "https://registry.npmjs.org/@types/http-assert/-/http-assert-1.5.3.tgz",
        "integrity": "sha512-FyAOrDuQmBi8/or3ns4rwPno7/9tJTijVW6aQQjK02+kOQ8zmoNg2XJtAuQhvQcy1ASJq38wirX5//9J1EqoUA=="
      },
      "node_modules/@types/http-errors": {
        "version": "1.8.2",
        "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-1.8.2.tgz",
        "integrity": "sha512-EqX+YQxINb+MeXaIqYDASb6U6FCHbWjkj4a1CKDBks3d/QiB2+PqBLyO72vLDgAO1wUI4O+9gweRcQK11bTL/w=="
      },
      "node_modules/@types/keygrip": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/@types/keygrip/-/keygrip-1.0.2.tgz",
        "integrity": "sha512-GJhpTepz2udxGexqos8wgaBx4I/zWIDPh/KOGEwAqtuGDkOUJu5eFvwmdBX4AmB8Odsr+9pHCQqiAqDL/yKMKw=="
      },
      "node_modules/@types/koa": {
        "version": "2.13.4",
        "resolved": "https://registry.npmjs.org/@types/koa/-/koa-2.13.4.tgz",
        "integrity": "sha512-dfHYMfU+z/vKtQB7NUrthdAEiSvnLebvBjwHtfFmpZmB7em2N3WVQdHgnFq+xvyVgxW5jKDmjWfLD3lw4g4uTw==",
        "dependencies": {
          "@types/accepts": "*",
          "@types/content-disposition": "*",
          "@types/cookies": "*",
          "@types/http-assert": "*",
          "@types/http-errors": "*",
          "@types/keygrip": "*",
          "@types/koa-compose": "*",
          "@types/node": "*"
        }
      },
      "node_modules/@types/koa-compose": {
        "version": "3.2.5",
        "resolved": "https://registry.npmjs.org/@types/koa-compose/-/koa-compose-3.2.5.tgz",
        "integrity": "sha512-B8nG/OoE1ORZqCkBVsup/AKcvjdgoHnfi4pZMn5UwAPCbhk/96xyv284eBYW8JlQbQ7zDmnpFr68I/40mFoIBQ==",
        "dependencies": {
          "@types/koa": "*"
        }
      },
      "node_modules/@types/long": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/@types/long/-/long-4.0.1.tgz",
        "integrity": "sha512-5tXH6Bx/kNGd3MgffdmP4dy2Z+G4eaXw0SE81Tq3BNadtnMR5/ySMzX4SLEzHJzSmPNn4HIdpQsBvXMUykr58w=="
      },
      "node_modules/@types/mime": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.2.tgz",
        "integrity": "sha512-YATxVxgRqNH6nHEIsvg6k2Boc1JHI9ZbH5iWFFv/MTkchz3b1ieGDa5T0a9RznNdI0KhVbdbWSN+KWWrQZRxTw=="
      },
      "node_modules/@types/node": {
        "version": "17.0.18",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.18.tgz",
        "integrity": "sha512-eKj4f/BsN/qcculZiRSujogjvp5O/k4lOW5m35NopjZM/QwLOR075a8pJW5hD+Rtdm2DaCVPENS6KtSQnUD6BA=="
      },
      "node_modules/@types/qs": {
        "version": "6.9.7",
        "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.7.tgz",
        "integrity": "sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw=="
      },
      "node_modules/@types/range-parser": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.4.tgz",
        "integrity": "sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw=="
      },
      "node_modules/@types/serve-static": {
        "version": "1.13.10",
        "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.13.10.tgz",
        "integrity": "sha512-nCkHGI4w7ZgAdNkrEu0bv+4xNV/XDqW+DydknebMOQwkpDGx8G+HTlj7R7ABI8i8nKxVw0wtKPi1D+lPOkh4YQ==",
        "dependencies": {
          "@types/mime": "^1",
          "@types/node": "*"
        }
      },
      "node_modules/@types/ws": {
        "version": "7.4.7",
        "resolved": "https://registry.npmjs.org/@types/ws/-/ws-7.4.7.tgz",
        "integrity": "sha512-JQbbmxZTZehdc2iszGKs5oC3NFnjeay7mtAWrdt7qNtAVK0g19muApzAy4bm9byz79xa2ZnO/BOBC2R8RC5Lww==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@wry/equality": {
        "version": "0.1.11",
        "resolved": "https://registry.npmjs.org/@wry/equality/-/equality-0.1.11.tgz",
        "integrity": "sha512-mwEVBDUVODlsQQ5dfuLUS5/Tf7jqUKyhKYHmVi4fPB6bDMOfWvUPJmKgS1Z7Za/sOI3vzWt4+O7yCiL/70MogA==",
        "dependencies": {
          "tslib": "^1.9.3"
        }
      },
      "node_modules/@wry/equality/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      },
      "node_modules/abbrev": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
      },
      "node_modules/accepts": {
        "version": "1.3.7",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
        "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
        "dependencies": {
          "mime-types": "~2.1.24",
          "negotiator": "0.6.2"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/ansi-align": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
        "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
        "dev": true,
        "dependencies": {
          "string-width": "^3.0.0"
        }
      },
      "node_modules/ansi-align/node_modules/string-width": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
        "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
        "dev": true,
        "dependencies": {
          "emoji-regex": "^7.0.1",
          "is-fullwidth-code-point": "^2.0.0",
          "strip-ansi": "^5.1.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/ansi-regex": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/ansi-styles": {
        "version": "4.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
        "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
        "dependencies": {
          "@types/color-name": "^1.1.1",
          "color-convert": "^2.0.1"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/chalk/ansi-styles?sponsor=1"
        }
      },
      "node_modules/anymatch": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
        "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
        "dev": true,
        "dependencies": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        },
        "engines": {
          "node": ">= 8"
        }
      },
      "node_modules/apollo-cache-control": {
        "version": "0.14.0",
        "resolved": "https://registry.npmjs.org/apollo-cache-control/-/apollo-cache-control-0.14.0.tgz",
        "integrity": "sha512-qN4BCq90egQrgNnTRMUHikLZZAprf3gbm8rC5Vwmc6ZdLolQ7bFsa769Hqi6Tq/lS31KLsXBLTOsRbfPHph12w==",
        "deprecated": "The functionality provided by the `apollo-cache-control` package is built in to `apollo-server-core` starting with Apollo Server 3. See https://www.apollographql.com/docs/apollo-server/migration/#cachecontrol for details.",
        "dependencies": {
          "apollo-server-env": "^3.1.0",
          "apollo-server-plugin-base": "^0.13.0"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-datasource": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/apollo-datasource/-/apollo-datasource-0.9.0.tgz",
        "integrity": "sha512-y8H99NExU1Sk4TvcaUxTdzfq2SZo6uSj5dyh75XSQvbpH6gdAXIW9MaBcvlNC7n0cVPsidHmOcHOWxJ/pTXGjA==",
        "dependencies": {
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/apollo-graphql": {
        "version": "0.9.5",
        "resolved": "https://registry.npmjs.org/apollo-graphql/-/apollo-graphql-0.9.5.tgz",
        "integrity": "sha512-RGt5k2JeBqrmnwRM0VOgWFiGKlGJMfmiif/4JvdaEqhMJ+xqe/9cfDYzXfn33ke2eWixsAbjEbRfy8XbaN9nTw==",
        "dependencies": {
          "core-js-pure": "^3.10.2",
          "lodash.sortby": "^4.7.0",
          "sha.js": "^2.4.11"
        },
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^14.2.1 || ^15.0.0"
        }
      },
      "node_modules/apollo-link": {
        "version": "1.2.14",
        "resolved": "https://registry.npmjs.org/apollo-link/-/apollo-link-1.2.14.tgz",
        "integrity": "sha512-p67CMEFP7kOG1JZ0ZkYZwRDa369w5PIjtMjvrQd/HnIV8FRsHRqLqK+oAZQnFa1DDdZtOtHTi+aMIW6EatC2jg==",
        "dependencies": {
          "apollo-utilities": "^1.3.0",
          "ts-invariant": "^0.4.0",
          "tslib": "^1.9.3",
          "zen-observable-ts": "^0.8.21"
        },
        "peerDependencies": {
          "graphql": "^0.11.3 || ^0.12.3 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-link/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      },
      "node_modules/apollo-reporting-protobuf": {
        "version": "0.8.0",
        "resolved": "https://registry.npmjs.org/apollo-reporting-protobuf/-/apollo-reporting-protobuf-0.8.0.tgz",
        "integrity": "sha512-B3XmnkH6Y458iV6OsA7AhfwvTgeZnFq9nPVjbxmLKnvfkEl8hYADtz724uPa0WeBiD7DSFcnLtqg9yGmCkBohg==",
        "dependencies": {
          "@apollo/protobufjs": "1.2.2"
        }
      },
      "node_modules/apollo-server-caching": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/apollo-server-caching/-/apollo-server-caching-0.7.0.tgz",
        "integrity": "sha512-MsVCuf/2FxuTFVhGLK13B+TZH9tBd2qkyoXKKILIiGcZ5CDUEBO14vIV63aNkMkS1xxvK2U4wBcuuNj/VH2Mkw==",
        "dependencies": {
          "lru-cache": "^6.0.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/apollo-server-core": {
        "version": "2.25.3",
        "resolved": "https://registry.npmjs.org/apollo-server-core/-/apollo-server-core-2.25.3.tgz",
        "integrity": "sha512-Midow3uZoJ9TjFNeCNSiWElTVZlvmB7G7tG6PPoxIR9Px90/v16Q6EzunDIO0rTJHRC3+yCwZkwtf8w2AcP0sA==",
        "dependencies": {
          "@apollographql/apollo-tools": "^0.5.0",
          "@apollographql/graphql-playground-html": "1.6.27",
          "@apollographql/graphql-upload-8-fork": "^8.1.3",
          "@josephg/resolvable": "^1.0.0",
          "@types/ws": "^7.0.0",
          "apollo-cache-control": "^0.14.0",
          "apollo-datasource": "^0.9.0",
          "apollo-graphql": "^0.9.0",
          "apollo-reporting-protobuf": "^0.8.0",
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0",
          "apollo-server-errors": "^2.5.0",
          "apollo-server-plugin-base": "^0.13.0",
          "apollo-server-types": "^0.9.0",
          "apollo-tracing": "^0.15.0",
          "async-retry": "^1.2.1",
          "fast-json-stable-stringify": "^2.0.0",
          "graphql-extensions": "^0.15.0",
          "graphql-tag": "^2.11.0",
          "graphql-tools": "^4.0.8",
          "loglevel": "^1.6.7",
          "lru-cache": "^6.0.0",
          "sha.js": "^2.4.11",
          "subscriptions-transport-ws": "^0.9.19",
          "uuid": "^8.0.0"
        },
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-server-env": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/apollo-server-env/-/apollo-server-env-3.1.0.tgz",
        "integrity": "sha512-iGdZgEOAuVop3vb0F2J3+kaBVi4caMoxefHosxmgzAbbSpvWehB8Y1QiSyyMeouYC38XNVk5wnZl+jdGSsWsIQ==",
        "dependencies": {
          "node-fetch": "^2.6.1",
          "util.promisify": "^1.0.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/apollo-server-errors": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/apollo-server-errors/-/apollo-server-errors-2.5.0.tgz",
        "integrity": "sha512-lO5oTjgiC3vlVg2RKr3RiXIIQ5pGXBFxYGGUkKDhTud3jMIhs+gel8L8zsEjKaKxkjHhCQAA/bcEfYiKkGQIvA==",
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-server-express": {
        "version": "2.25.3",
        "resolved": "https://registry.npmjs.org/apollo-server-express/-/apollo-server-express-2.25.3.tgz",
        "integrity": "sha512-tTFYn0oKH2qqLwVj7Ez2+MiKleXACODiGh5IxsB7VuYCPMAi9Yl8iUSlwTjQUvgCWfReZjnf0vFL2k5YhDlrtQ==",
        "dependencies": {
          "@apollographql/graphql-playground-html": "1.6.27",
          "@types/accepts": "^1.3.5",
          "@types/body-parser": "1.19.0",
          "@types/cors": "2.8.10",
          "@types/express": "^4.17.12",
          "@types/express-serve-static-core": "^4.17.21",
          "accepts": "^1.3.5",
          "apollo-server-core": "^2.25.3",
          "apollo-server-types": "^0.9.0",
          "body-parser": "^1.18.3",
          "cors": "^2.8.5",
          "express": "^4.17.1",
          "graphql-subscriptions": "^1.0.0",
          "graphql-tools": "^4.0.8",
          "parseurl": "^1.3.2",
          "subscriptions-transport-ws": "^0.9.19",
          "type-is": "^1.6.16"
        },
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-server-plugin-base": {
        "version": "0.13.0",
        "resolved": "https://registry.npmjs.org/apollo-server-plugin-base/-/apollo-server-plugin-base-0.13.0.tgz",
        "integrity": "sha512-L3TMmq2YE6BU6I4Tmgygmd0W55L+6XfD9137k+cWEBFu50vRY4Re+d+fL5WuPkk5xSPKd/PIaqzidu5V/zz8Kg==",
        "dependencies": {
          "apollo-server-types": "^0.9.0"
        },
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-server-types": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/apollo-server-types/-/apollo-server-types-0.9.0.tgz",
        "integrity": "sha512-qk9tg4Imwpk732JJHBkhW0jzfG0nFsLqK2DY6UhvJf7jLnRePYsPxWfPiNkxni27pLE2tiNlCwoDFSeWqpZyBg==",
        "dependencies": {
          "apollo-reporting-protobuf": "^0.8.0",
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0"
        },
        "engines": {
          "node": ">=6"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-tracing": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/apollo-tracing/-/apollo-tracing-0.15.0.tgz",
        "integrity": "sha512-UP0fztFvaZPHDhIB/J+qGuy6hWO4If069MGC98qVs0I8FICIGu4/8ykpX3X3K6RtaQ56EDAWKykCxFv4ScxMeA==",
        "deprecated": "The `apollo-tracing` package is no longer part of Apollo Server 3. See https://www.apollographql.com/docs/apollo-server/migration/#tracing for details",
        "dependencies": {
          "apollo-server-env": "^3.1.0",
          "apollo-server-plugin-base": "^0.13.0"
        },
        "engines": {
          "node": ">=4.0"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-utilities": {
        "version": "1.3.4",
        "resolved": "https://registry.npmjs.org/apollo-utilities/-/apollo-utilities-1.3.4.tgz",
        "integrity": "sha512-pk2hiWrCXMAy2fRPwEyhvka+mqwzeP60Jr1tRYi5xru+3ko94HI9o6lK0CT33/w4RDlxWchmdhDCrvdr+pHCig==",
        "dependencies": {
          "@wry/equality": "^0.1.2",
          "fast-json-stable-stringify": "^2.0.0",
          "ts-invariant": "^0.4.0",
          "tslib": "^1.10.0"
        },
        "peerDependencies": {
          "graphql": "^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/apollo-utilities/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      },
      "node_modules/aproba": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
        "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
      },
      "node_modules/are-we-there-yet": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
        "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
        "dependencies": {
          "delegates": "^1.0.0",
          "readable-stream": "^2.0.6"
        }
      },
      "node_modules/array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
      },
      "node_modules/async-retry": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/async-retry/-/async-retry-1.3.3.tgz",
        "integrity": "sha512-wfr/jstw9xNi/0teMHrRW7dsz3Lt5ARhYNZ2ewpadnhaIp5mbALhOAP+EAdsC7t4Z6wqsDVv9+W6gm1Dk9mEyw==",
        "dependencies": {
          "retry": "0.13.1"
        }
      },
      "node_modules/backo2": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",
        "integrity": "sha1-MasayLEpNjRj41s+u2n038+6eUc="
      },
      "node_modules/balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
      },
      "node_modules/bcrypt": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.0.0.tgz",
        "integrity": "sha512-jB0yCBl4W/kVHM2whjfyqnxTmOHkCX4kHEa5nYKSoGeYe8YrjTYTc87/6bwt1g8cmV0QrbhKriETg9jWtcREhg==",
        "hasInstallScript": true,
        "dependencies": {
          "node-addon-api": "^3.0.0",
          "node-pre-gyp": "0.15.0"
        },
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/binary-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
        "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/bl": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/bl/-/bl-2.2.1.tgz",
        "integrity": "sha512-6Pesp1w0DEX1N550i/uGV/TqucVL4AM/pgThFSN/Qq9si1/DF9aIHs1BxD8V/QU0HoeHO6cQRTAuYnLPKq1e4g==",
        "dependencies": {
          "readable-stream": "^2.3.5",
          "safe-buffer": "^5.1.1"
        }
      },
      "node_modules/bluebird": {
        "version": "3.5.1",
        "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
        "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
      },
      "node_modules/body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
        "dependencies": {
          "bytes": "3.1.0",
          "content-type": "~1.0.4",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "on-finished": "~2.3.0",
          "qs": "6.7.0",
          "raw-body": "2.4.0",
          "type-is": "~1.6.17"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/boxen": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
        "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
        "dev": true,
        "dependencies": {
          "ansi-align": "^3.0.0",
          "camelcase": "^5.3.1",
          "chalk": "^3.0.0",
          "cli-boxes": "^2.2.0",
          "string-width": "^4.1.0",
          "term-size": "^2.1.0",
          "type-fest": "^0.8.1",
          "widest-line": "^3.1.0"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "dependencies": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "node_modules/braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "dev": true,
        "dependencies": {
          "fill-range": "^7.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/bson": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.4.tgz",
        "integrity": "sha512-S/yKGU1syOMzO86+dGpg2qGoDL0zvzcb262G+gqEy6TgP6rt6z6qxSFX/8X6vLC91P7G7C3nLs0+bvDzmvBA3Q==",
        "engines": {
          "node": ">=0.6.19"
        }
      },
      "node_modules/buffer-equal-constant-time": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
        "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
      },
      "node_modules/busboy": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.3.1.tgz",
        "integrity": "sha512-y7tTxhGKXcyBxRKAni+awqx8uqaJKrSFSNFSeRG5CsWNdmy2BIK+6VGWEW7TZnIO/533mtMEA4rOevQV815YJw==",
        "dependencies": {
          "dicer": "0.3.0"
        },
        "engines": {
          "node": ">=4.5.0"
        }
      },
      "node_modules/bytes": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
        "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/cacheable-request": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
        "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
        "dev": true,
        "dependencies": {
          "clone-response": "^1.0.2",
          "get-stream": "^5.1.0",
          "http-cache-semantics": "^4.0.0",
          "keyv": "^3.0.0",
          "lowercase-keys": "^2.0.0",
          "normalize-url": "^4.1.0",
          "responselike": "^1.0.2"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/cacheable-request/node_modules/get-stream": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.1.0.tgz",
        "integrity": "sha512-EXr1FOzrzTfGeL0gQdeFEvOMm2mzMOglyiOXSTpPC+iAjAKftbr3jpCMWynogwYnM+eSj9sHGc6wjIcDvYiygw==",
        "dev": true,
        "dependencies": {
          "pump": "^3.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/cacheable-request/node_modules/lowercase-keys": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
        "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/call-bind": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
        "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
        "dependencies": {
          "function-bind": "^1.1.1",
          "get-intrinsic": "^1.0.2"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/chalk": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
        "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
        "dev": true,
        "dependencies": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/chalk/node_modules/has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/chalk/node_modules/supports-color": {
        "version": "7.1.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
        "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
        "dev": true,
        "dependencies": {
          "has-flag": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/chokidar": {
        "version": "3.3.1",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
        "integrity": "sha512-4QYCEWOcK3OJrxwvyyAOxFuhpvOVCYkr33LPfFNBjAD/w3sEzWsp2BUOkI4l9bHvWioAd0rc6NlHUOEaWkTeqg==",
        "dev": true,
        "dependencies": {
          "anymatch": "~3.1.1",
          "braces": "~3.0.2",
          "glob-parent": "~5.1.0",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.3.0"
        },
        "engines": {
          "node": ">= 8.10.0"
        },
        "optionalDependencies": {
          "fsevents": "~2.1.2"
        }
      },
      "node_modules/chownr": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
        "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
      },
      "node_modules/ci-info": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
        "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
        "dev": true
      },
      "node_modules/cli-boxes": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.0.tgz",
        "integrity": "sha512-gpaBrMAizVEANOpfZp/EEUixTXDyGt7DFzdK5hU+UbWt/J0lB0w20ncZj59Z9a93xHb9u12zF5BS6i9RKbtg4w==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/cliui": {
        "version": "7.0.4",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
        "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
        "dependencies": {
          "string-width": "^4.2.0",
          "strip-ansi": "^6.0.0",
          "wrap-ansi": "^7.0.0"
        }
      },
      "node_modules/cliui/node_modules/ansi-regex": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
        "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/cliui/node_modules/strip-ansi": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
        "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
        "dependencies": {
          "ansi-regex": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/clone-response": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
        "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
        "dev": true,
        "dependencies": {
          "mimic-response": "^1.0.0"
        }
      },
      "node_modules/code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "dependencies": {
          "color-name": "~1.1.4"
        },
        "engines": {
          "node": ">=7.0.0"
        }
      },
      "node_modules/color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "node_modules/commander": {
        "version": "2.20.3",
        "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
        "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
      },
      "node_modules/concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "node_modules/concurrently": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-7.0.0.tgz",
        "integrity": "sha512-WKM7PUsI8wyXpF80H+zjHP32fsgsHNQfPLw/e70Z5dYkV7hF+rf8q3D+ScWJIEr57CpkO3OWBko6hwhQLPR8Pw==",
        "dependencies": {
          "chalk": "^4.1.0",
          "date-fns": "^2.16.1",
          "lodash": "^4.17.21",
          "rxjs": "^6.6.3",
          "spawn-command": "^0.0.2-1",
          "supports-color": "^8.1.0",
          "tree-kill": "^1.2.2",
          "yargs": "^16.2.0"
        },
        "bin": {
          "concurrently": "dist/bin/concurrently.js"
        },
        "engines": {
          "node": "^12.20.0 || ^14.13.0 || >=16.0.0"
        }
      },
      "node_modules/concurrently/node_modules/chalk": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
        "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
        "dependencies": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/chalk?sponsor=1"
        }
      },
      "node_modules/concurrently/node_modules/chalk/node_modules/supports-color": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
        "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
        "dependencies": {
          "has-flag": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/concurrently/node_modules/has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/concurrently/node_modules/supports-color": {
        "version": "8.1.1",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
        "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
        "dependencies": {
          "has-flag": "^4.0.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/supports-color?sponsor=1"
        }
      },
      "node_modules/configstore": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
        "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
        "dev": true,
        "dependencies": {
          "dot-prop": "^5.2.0",
          "graceful-fs": "^4.1.2",
          "make-dir": "^3.0.0",
          "unique-string": "^2.0.0",
          "write-file-atomic": "^3.0.0",
          "xdg-basedir": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/console-control-strings": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
        "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
      },
      "node_modules/content-disposition": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
        "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
        "dependencies": {
          "safe-buffer": "5.1.2"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/content-type": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
        "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
        "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
      },
      "node_modules/core-js-pure": {
        "version": "3.21.1",
        "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.21.1.tgz",
        "integrity": "sha512-12VZfFIu+wyVbBebyHmRTuEE/tZrB4tJToWcwAMcsp3h4+sHR+fMJWbKpYiCRWlhFBq+KNyO8rIV9rTkeVmznQ==",
        "hasInstallScript": true,
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/core-js"
        }
      },
      "node_modules/core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
      },
      "node_modules/cors": {
        "version": "2.8.5",
        "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
        "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
        "dependencies": {
          "object-assign": "^4",
          "vary": "^1"
        },
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/crypto-random-string": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
        "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/cssfilter": {
        "version": "0.0.10",
        "resolved": "https://registry.npmjs.org/cssfilter/-/cssfilter-0.0.10.tgz",
        "integrity": "sha1-xtJnJjKi5cg+AT5oZKQs6N79IK4="
      },
      "node_modules/date-fns": {
        "version": "2.28.0",
        "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.28.0.tgz",
        "integrity": "sha512-8d35hViGYx/QH0icHYCeLmsLmMUheMmTyV9Fcm6gvNwdw31yXXH+O85sOBJ+OLnLQMKZowvpKb6FgMIQjcpvQw==",
        "engines": {
          "node": ">=0.11"
        },
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/date-fns"
        }
      },
      "node_modules/debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "dependencies": {
          "ms": "2.0.0"
        }
      },
      "node_modules/decompress-response": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
        "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
        "dev": true,
        "dependencies": {
          "mimic-response": "^1.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/deep-extend": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
        "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
        "engines": {
          "node": ">=4.0.0"
        }
      },
      "node_modules/defer-to-connect": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
        "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==",
        "dev": true
      },
      "node_modules/define-properties": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
        "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
        "dependencies": {
          "object-keys": "^1.0.12"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/delegates": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
        "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
      },
      "node_modules/depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/deprecated-decorator": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/deprecated-decorator/-/deprecated-decorator-0.1.6.tgz",
        "integrity": "sha1-AJZjF7ehL+kvPMgx91g68ym4bDc="
      },
      "node_modules/destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
      },
      "node_modules/detect-libc": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
        "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups=",
        "bin": {
          "detect-libc": "bin/detect-libc.js"
        },
        "engines": {
          "node": ">=0.10"
        }
      },
      "node_modules/dicer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.3.0.tgz",
        "integrity": "sha512-MdceRRWqltEG2dZqO769g27N/3PXfcKl04VhYnBlo2YhH7zPi88VebsjTKclaOyiuMaGU72hTfw3VkUitGcVCA==",
        "dependencies": {
          "streamsearch": "0.1.2"
        },
        "engines": {
          "node": ">=4.5.0"
        }
      },
      "node_modules/dot-prop": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.2.0.tgz",
        "integrity": "sha512-uEUyaDKoSQ1M4Oq8l45hSE26SnTxL6snNnqvK/VWx5wJhmff5z0FUVJDKDanor/6w3kzE3i7XZOk+7wC0EXr1A==",
        "dev": true,
        "dependencies": {
          "is-obj": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/duplexer3": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
        "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
        "dev": true
      },
      "node_modules/ecdsa-sig-formatter": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
        "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
        "dependencies": {
          "safe-buffer": "^5.0.1"
        }
      },
      "node_modules/ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
      },
      "node_modules/emoji-regex": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
        "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
        "dev": true
      },
      "node_modules/encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/end-of-stream": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
        "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
        "dev": true,
        "dependencies": {
          "once": "^1.4.0"
        }
      },
      "node_modules/es-abstract": {
        "version": "1.19.1",
        "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.19.1.tgz",
        "integrity": "sha512-2vJ6tjA/UfqLm2MPs7jxVybLoB8i1t1Jd9R3kISld20sIxPcTbLuggQOUxeWeAvIUkduv/CfMjuh4WmiXr2v9w==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "es-to-primitive": "^1.2.1",
          "function-bind": "^1.1.1",
          "get-intrinsic": "^1.1.1",
          "get-symbol-description": "^1.0.0",
          "has": "^1.0.3",
          "has-symbols": "^1.0.2",
          "internal-slot": "^1.0.3",
          "is-callable": "^1.2.4",
          "is-negative-zero": "^2.0.1",
          "is-regex": "^1.1.4",
          "is-shared-array-buffer": "^1.0.1",
          "is-string": "^1.0.7",
          "is-weakref": "^1.0.1",
          "object-inspect": "^1.11.0",
          "object-keys": "^1.1.1",
          "object.assign": "^4.1.2",
          "string.prototype.trimend": "^1.0.4",
          "string.prototype.trimstart": "^1.0.4",
          "unbox-primitive": "^1.0.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/es-to-primitive": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
        "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
        "dependencies": {
          "is-callable": "^1.1.4",
          "is-date-object": "^1.0.1",
          "is-symbol": "^1.0.2"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/escalade": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
        "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/escape-goat": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
        "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
      },
      "node_modules/etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/eventemitter3": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz",
        "integrity": "sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q=="
      },
      "node_modules/express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
        "dependencies": {
          "accepts": "~1.3.7",
          "array-flatten": "1.1.1",
          "body-parser": "1.19.0",
          "content-disposition": "0.5.3",
          "content-type": "~1.0.4",
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "~1.1.2",
          "fresh": "0.5.2",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.5",
          "qs": "6.7.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.1.2",
          "send": "0.17.1",
          "serve-static": "1.14.1",
          "setprototypeof": "1.1.1",
          "statuses": "~1.5.0",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        },
        "engines": {
          "node": ">= 0.10.0"
        }
      },
      "node_modules/faker": {
        "version": "6.6.6",
        "resolved": "https://registry.npmjs.org/faker/-/faker-6.6.6.tgz",
        "integrity": "sha512-9tCqYEDHI5RYFQigXFwF1hnCwcWCOJl/hmll0lr5D2Ljjb0o4wphb69wikeJDz5qCEzXCoPvG6ss5SDP6IfOdg=="
      },
      "node_modules/fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
      },
      "node_modules/fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "dev": true,
        "dependencies": {
          "to-regex-range": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/finalhandler": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
        "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
        "dependencies": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "statuses": "~1.5.0",
          "unpipe": "~1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/for-each": {
        "version": "0.3.3",
        "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
        "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
        "dependencies": {
          "is-callable": "^1.1.3"
        }
      },
      "node_modules/forwarded": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
        "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fs-capacitor": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/fs-capacitor/-/fs-capacitor-2.0.4.tgz",
        "integrity": "sha512-8S4f4WsCryNw2mJJchi46YgB6CR5Ze+4L1h8ewl9tEpL4SJ3ZO+c/bS4BWhB8bK+O3TMqhuZarTitd0S0eh2pA==",
        "engines": {
          "node": ">=8.5"
        }
      },
      "node_modules/fs-minipass": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
        "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
        "dependencies": {
          "minipass": "^2.6.0"
        }
      },
      "node_modules/fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "node_modules/fsevents": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.3.tgz",
        "integrity": "sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==",
        "deprecated": "\"Please update to latest v2.3 or v2.2\"",
        "dev": true,
        "hasInstallScript": true,
        "optional": true,
        "os": [
          "darwin"
        ],
        "engines": {
          "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
        }
      },
      "node_modules/function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
      },
      "node_modules/gauge": {
        "version": "2.7.4",
        "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
        "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
        "dependencies": {
          "aproba": "^1.0.3",
          "console-control-strings": "^1.0.0",
          "has-unicode": "^2.0.0",
          "object-assign": "^4.1.0",
          "signal-exit": "^3.0.0",
          "string-width": "^1.0.1",
          "strip-ansi": "^3.0.1",
          "wide-align": "^1.1.0"
        }
      },
      "node_modules/gauge/node_modules/ansi-regex": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
        "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/gauge/node_modules/is-fullwidth-code-point": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
        "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
        "dependencies": {
          "number-is-nan": "^1.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/gauge/node_modules/string-width": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
        "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
        "dependencies": {
          "code-point-at": "^1.0.0",
          "is-fullwidth-code-point": "^1.0.0",
          "strip-ansi": "^3.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/gauge/node_modules/strip-ansi": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
        "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
        "dependencies": {
          "ansi-regex": "^2.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
        "engines": {
          "node": "6.* || 8.* || >= 10.*"
        }
      },
      "node_modules/get-intrinsic": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
        "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
        "dependencies": {
          "function-bind": "^1.1.1",
          "has": "^1.0.3",
          "has-symbols": "^1.0.1"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/get-stream": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
        "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
        "dev": true,
        "dependencies": {
          "pump": "^3.0.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/get-symbol-description": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
        "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "get-intrinsic": "^1.1.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/glob": {
        "version": "7.1.7",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
        "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
        "dependencies": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        },
        "engines": {
          "node": "*"
        },
        "funding": {
          "url": "https://github.com/sponsors/isaacs"
        }
      },
      "node_modules/glob-parent": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
        "dev": true,
        "dependencies": {
          "is-glob": "^4.0.1"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/global-dirs": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.0.1.tgz",
        "integrity": "sha512-5HqUqdhkEovj2Of/ms3IeS/EekcO54ytHRLV4PEY2rhRwrHXLQjeVEES0Lhka0xwNDtGYn58wyC4s5+MHsOO6A==",
        "dev": true,
        "dependencies": {
          "ini": "^1.3.5"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/got": {
        "version": "9.6.0",
        "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
        "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
        "dev": true,
        "dependencies": {
          "@sindresorhus/is": "^0.14.0",
          "@szmarczak/http-timer": "^1.1.2",
          "cacheable-request": "^6.0.0",
          "decompress-response": "^3.3.0",
          "duplexer3": "^0.1.4",
          "get-stream": "^4.1.0",
          "lowercase-keys": "^1.0.1",
          "mimic-response": "^1.0.1",
          "p-cancelable": "^1.0.0",
          "to-readable-stream": "^1.0.0",
          "url-parse-lax": "^3.0.0"
        },
        "engines": {
          "node": ">=8.6"
        }
      },
      "node_modules/graceful-fs": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
        "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ==",
        "dev": true
      },
      "node_modules/graphql": {
        "version": "15.8.0",
        "resolved": "https://registry.npmjs.org/graphql/-/graphql-15.8.0.tgz",
        "integrity": "sha512-5gghUc24tP9HRznNpV2+FIoq3xKkj5dTQqf4v0CpdPbFVwFkWoxOM+o+2OC9ZSvjEMTjfmG9QT+gcvggTwW1zw==",
        "engines": {
          "node": ">= 10.x"
        }
      },
      "node_modules/graphql-extensions": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/graphql-extensions/-/graphql-extensions-0.15.0.tgz",
        "integrity": "sha512-bVddVO8YFJPwuACn+3pgmrEg6I8iBuYLuwvxiE+lcQQ7POotVZxm2rgGw0PvVYmWWf3DT7nTVDZ5ROh/ALp8mA==",
        "deprecated": "The `graphql-extensions` API has been removed from Apollo Server 3. Use the plugin API instead: https://www.apollographql.com/docs/apollo-server/integrations/plugins/",
        "dependencies": {
          "@apollographql/apollo-tools": "^0.5.0",
          "apollo-server-env": "^3.1.0",
          "apollo-server-types": "^0.9.0"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependencies": {
          "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/graphql-subscriptions": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/graphql-subscriptions/-/graphql-subscriptions-1.2.1.tgz",
        "integrity": "sha512-95yD/tKi24q8xYa7Q9rhQN16AYj5wPbrb8tmHGM3WRc9EBmWrG/0kkMl+tQG8wcEuE9ibR4zyOM31p5Sdr2v4g==",
        "dependencies": {
          "iterall": "^1.3.0"
        },
        "peerDependencies": {
          "graphql": "^0.10.5 || ^0.11.3 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/graphql-tag": {
        "version": "2.12.6",
        "resolved": "https://registry.npmjs.org/graphql-tag/-/graphql-tag-2.12.6.tgz",
        "integrity": "sha512-FdSNcu2QQcWnM2VNvSCCDCVS5PpPqpzgFT8+GXzqJuoDd0CBncxCY278u4mhRO7tMgo2JjgJA5aZ+nWSQ/Z+xg==",
        "dependencies": {
          "tslib": "^2.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "peerDependencies": {
          "graphql": "^0.9.0 || ^0.10.0 || ^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0 || ^16.0.0"
        }
      },
      "node_modules/graphql-tools": {
        "version": "4.0.8",
        "resolved": "https://registry.npmjs.org/graphql-tools/-/graphql-tools-4.0.8.tgz",
        "integrity": "sha512-MW+ioleBrwhRjalKjYaLQbr+920pHBgy9vM/n47sswtns8+96sRn5M/G+J1eu7IMeKWiN/9p6tmwCHU7552VJg==",
        "deprecated": "This package has been deprecated and now it only exports makeExecutableSchema.\\nAnd it will no longer receive updates.\\nWe recommend you to migrate to scoped packages such as @graphql-tools/schema, @graphql-tools/utils and etc.\\nCheck out https://www.graphql-tools.com to learn what package you should use instead",
        "dependencies": {
          "apollo-link": "^1.2.14",
          "apollo-utilities": "^1.0.1",
          "deprecated-decorator": "^0.1.6",
          "iterall": "^1.1.3",
          "uuid": "^3.1.0"
        },
        "peerDependencies": {
          "graphql": "^0.13.0 || ^14.0.0 || ^15.0.0"
        }
      },
      "node_modules/graphql-tools/node_modules/uuid": {
        "version": "3.4.0",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
        "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
        "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
        "bin": {
          "uuid": "bin/uuid"
        }
      },
      "node_modules/has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "dependencies": {
          "function-bind": "^1.1.1"
        },
        "engines": {
          "node": ">= 0.4.0"
        }
      },
      "node_modules/has-bigints": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
        "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
        "dev": true,
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/has-symbols": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
        "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-tostringtag": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
        "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
        "dependencies": {
          "has-symbols": "^1.0.2"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-unicode": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
        "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
      },
      "node_modules/has-yarn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
        "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/http-cache-semantics": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
        "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
        "dev": true
      },
      "node_modules/http-errors": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
        "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
        "dependencies": {
          "depd": "~1.1.2",
          "inherits": "2.0.3",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/ignore-by-default": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
        "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk=",
        "dev": true
      },
      "node_modules/ignore-walk": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.4.tgz",
        "integrity": "sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==",
        "dependencies": {
          "minimatch": "^3.0.4"
        }
      },
      "node_modules/import-lazy": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
        "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
        "dev": true,
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
        "dev": true,
        "engines": {
          "node": ">=0.8.19"
        }
      },
      "node_modules/inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "dependencies": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "node_modules/inherits": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
        "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
      },
      "node_modules/ini": {
        "version": "1.3.8",
        "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
        "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
      },
      "node_modules/internal-slot": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
        "integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
        "dependencies": {
          "get-intrinsic": "^1.1.0",
          "has": "^1.0.3",
          "side-channel": "^1.0.4"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/is-bigint": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
        "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
        "dependencies": {
          "has-bigints": "^1.0.1"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dev": true,
        "dependencies": {
          "binary-extensions": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-boolean-object": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
        "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "has-tostringtag": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-callable": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
        "integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-ci": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
        "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
        "dev": true,
        "dependencies": {
          "ci-info": "^2.0.0"
        },
        "bin": {
          "is-ci": "bin.js"
        }
      },
      "node_modules/is-date-object": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
        "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
        "dependencies": {
          "has-tostringtag": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
        "dev": true,
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-fullwidth-code-point": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
        "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "dev": true,
        "dependencies": {
          "is-extglob": "^2.1.1"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-installed-globally": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
        "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
        "dev": true,
        "dependencies": {
          "global-dirs": "^2.0.1",
          "is-path-inside": "^3.0.1"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/is-negative-zero": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
        "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-npm": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
        "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "dev": true,
        "engines": {
          "node": ">=0.12.0"
        }
      },
      "node_modules/is-number-object": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.6.tgz",
        "integrity": "sha512-bEVOqiRcvo3zO1+G2lVMy+gkkEm9Yh7cDMRusKKu5ZJKPUYSJwICTKZrNKHA2EbSP0Tu0+6B/emsYNHZyn6K8g==",
        "dependencies": {
          "has-tostringtag": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-obj": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
        "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-path-inside": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.2.tgz",
        "integrity": "sha512-/2UGPSgmtqwo1ktx8NDHjuPwZWmHhO+gj0f93EkhLB5RgW9RZevWYYlIkS6zePc6U2WpOdQYIwHe9YC4DWEBVg==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-regex": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
        "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "has-tostringtag": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-shared-array-buffer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.1.tgz",
        "integrity": "sha512-IU0NmyknYZN0rChcKhRO1X8LYz5Isj/Fsqh8NJOSf+N/hCOTwy29F32Ik7a+QszE63IdvmwdTPDd6cZ5pg4cwA==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-string": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
        "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
        "dependencies": {
          "has-tostringtag": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-symbol": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
        "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
        "dependencies": {
          "has-symbols": "^1.0.2"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
        "dev": true
      },
      "node_modules/is-weakref": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
        "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
        "dependencies": {
          "call-bind": "^1.0.2"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/is-yarn-global": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
        "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==",
        "dev": true
      },
      "node_modules/isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
      },
      "node_modules/iterall": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/iterall/-/iterall-1.3.0.tgz",
        "integrity": "sha512-QZ9qOMdF+QLHxy1QIpUHUU1D5pS2CG2P69LF6L6CPjPYA/XMOmKV3PZpawHoAjHNyB0swdVTRxdYT4tbBbxqwg=="
      },
      "node_modules/json-buffer": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
        "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
        "dev": true
      },
      "node_modules/jsonwebtoken": {
        "version": "8.5.1",
        "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
        "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
        "dependencies": {
          "jws": "^3.2.2",
          "lodash.includes": "^4.3.0",
          "lodash.isboolean": "^3.0.3",
          "lodash.isinteger": "^4.0.4",
          "lodash.isnumber": "^3.0.3",
          "lodash.isplainobject": "^4.0.6",
          "lodash.isstring": "^4.0.1",
          "lodash.once": "^4.0.0",
          "ms": "^2.1.1",
          "semver": "^5.6.0"
        },
        "engines": {
          "node": ">=4",
          "npm": ">=1.4.28"
        }
      },
      "node_modules/jsonwebtoken/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/jwa": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
        "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
        "dependencies": {
          "buffer-equal-constant-time": "1.0.1",
          "ecdsa-sig-formatter": "1.0.11",
          "safe-buffer": "^5.0.1"
        }
      },
      "node_modules/jws": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
        "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
        "dependencies": {
          "jwa": "^1.4.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "node_modules/kareem": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.1.tgz",
        "integrity": "sha512-l3hLhffs9zqoDe8zjmb/mAN4B8VT3L56EUvKNqLFVs9YlFA+zx7ke1DO8STAdDyYNkeSo1nKmjuvQeI12So8Xw=="
      },
      "node_modules/keyv": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
        "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
        "dev": true,
        "dependencies": {
          "json-buffer": "3.0.0"
        }
      },
      "node_modules/latest-version": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
        "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
        "dev": true,
        "dependencies": {
          "package-json": "^6.3.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/lodash": {
        "version": "4.17.21",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
        "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
      },
      "node_modules/lodash.includes": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
        "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
      },
      "node_modules/lodash.isboolean": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
        "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
      },
      "node_modules/lodash.isinteger": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
        "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
      },
      "node_modules/lodash.isnumber": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
        "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
      },
      "node_modules/lodash.isplainobject": {
        "version": "4.0.6",
        "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
        "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
      },
      "node_modules/lodash.isstring": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
        "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
      },
      "node_modules/lodash.once": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
        "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
      },
      "node_modules/lodash.sortby": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
        "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg="
      },
      "node_modules/loglevel": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.8.0.tgz",
        "integrity": "sha512-G6A/nJLRgWOuuwdNuA6koovfEV1YpqqAG4pRUlFaz3jj2QNZ8M4vBqnVA+HBTmU/AMNUtlOsMmSpF6NyOjztbA==",
        "engines": {
          "node": ">= 0.6.0"
        },
        "funding": {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/loglevel"
        }
      },
      "node_modules/long": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
        "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
      },
      "node_modules/lowercase-keys": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
        "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
        "dev": true,
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "dependencies": {
          "yallist": "^4.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/lru-cache/node_modules/yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      },
      "node_modules/make-dir": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
        "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
        "dev": true,
        "dependencies": {
          "semver": "^6.0.0"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/make-dir/node_modules/semver": {
        "version": "6.3.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
        "dev": true,
        "bin": {
          "semver": "bin/semver.js"
        }
      },
      "node_modules/media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/memory-pager": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
        "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
        "optional": true
      },
      "node_modules/merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
      },
      "node_modules/methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
        "bin": {
          "mime": "cli.js"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/mime-db": {
        "version": "1.44.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
        "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime-types": {
        "version": "2.1.27",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
        "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
        "dependencies": {
          "mime-db": "1.44.0"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mimic-response": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
        "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
        "dev": true,
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "dependencies": {
          "brace-expansion": "^1.1.7"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/minimist": {
        "version": "1.2.5",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
        "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
      },
      "node_modules/minipass": {
        "version": "2.9.0",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
        "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
        "dependencies": {
          "safe-buffer": "^5.1.2",
          "yallist": "^3.0.0"
        }
      },
      "node_modules/minizlib": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
        "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
        "dependencies": {
          "minipass": "^2.9.0"
        }
      },
      "node_modules/mkdirp": {
        "version": "0.5.5",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
        "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
        "dependencies": {
          "minimist": "^1.2.5"
        },
        "bin": {
          "mkdirp": "bin/cmd.js"
        }
      },
      "node_modules/mongoose": {
        "version": "5.9.10",
        "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.9.10.tgz",
        "integrity": "sha512-w1HNukfJzzDLfcI1f79h2Wj4ogVbf+X8hRkyFgqlcjK7OnDlAgahjDMIsT+mCS9jKojrMhjSsZIs9FiRPkLqMg==",
        "dependencies": {
          "bson": "^1.1.4",
          "kareem": "2.3.1",
          "mongodb": "3.5.6",
          "mongoose-legacy-pluralize": "1.0.2",
          "mpath": "0.7.0",
          "mquery": "3.2.2",
          "ms": "2.1.2",
          "regexp-clone": "1.0.0",
          "safe-buffer": "5.1.2",
          "sift": "7.0.1",
          "sliced": "1.0.1"
        },
        "engines": {
          "node": ">=4.0.0"
        },
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/mongoose"
        }
      },
      "node_modules/mongoose-legacy-pluralize": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
        "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ==",
        "peerDependencies": {
          "mongoose": "*"
        }
      },
      "node_modules/mongoose/node_modules/denque": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/denque/-/denque-1.5.1.tgz",
        "integrity": "sha512-XwE+iZ4D6ZUB7mfYRMb5wByE8L74HCn30FBN7sWnXksWc1LO1bPDl67pBR9o/kC4z/xSNAwkMYcGgqDV3BE3Hw==",
        "engines": {
          "node": ">=0.10"
        }
      },
      "node_modules/mongoose/node_modules/mongodb": {
        "version": "3.5.6",
        "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.5.6.tgz",
        "integrity": "sha512-sh3q3GLDLT4QmoDLamxtAECwC3RGjq+oNuK1ENV8+tnipIavss6sMYt77hpygqlMOCt0Sla5cl7H4SKCVBCGEg==",
        "dependencies": {
          "bl": "^2.2.0",
          "bson": "^1.1.4",
          "denque": "^1.4.1",
          "require_optional": "^1.0.1",
          "safe-buffer": "^5.1.2"
        },
        "engines": {
          "node": ">=4"
        },
        "optionalDependencies": {
          "saslprep": "^1.0.0"
        }
      },
      "node_modules/mongoose/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/mpath": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.7.0.tgz",
        "integrity": "sha512-Aiq04hILxhz1L+f7sjGyn7IxYzWm1zLNNXcfhDtx04kZ2Gk7uvFdgZ8ts1cWa/6d0TQmag2yR8zSGZUmp0tFNg==",
        "engines": {
          "node": ">=4.0.0"
        }
      },
      "node_modules/mquery": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.2.tgz",
        "integrity": "sha512-XB52992COp0KP230I3qloVUbkLUxJIu328HBP2t2EsxSFtf4W1HPSOBWOXf1bqxK4Xbb66lfMJ+Bpfd9/yZE1Q==",
        "dependencies": {
          "bluebird": "3.5.1",
          "debug": "3.1.0",
          "regexp-clone": "^1.0.0",
          "safe-buffer": "5.1.2",
          "sliced": "1.0.1"
        },
        "engines": {
          "node": ">=4.0.0"
        }
      },
      "node_modules/mquery/node_modules/debug": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
        "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
        "dependencies": {
          "ms": "2.0.0"
        }
      },
      "node_modules/ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
      },
      "node_modules/needle": {
        "version": "2.6.0",
        "resolved": "https://registry.npmjs.org/needle/-/needle-2.6.0.tgz",
        "integrity": "sha512-KKYdza4heMsEfSWD7VPUIz3zX2XDwOyX2d+geb4vrERZMT5RMU6ujjaD+I5Yr54uZxQ2w6XRTAhHBbSCyovZBg==",
        "dependencies": {
          "debug": "^3.2.6",
          "iconv-lite": "^0.4.4",
          "sax": "^1.2.4"
        },
        "bin": {
          "needle": "bin/needle"
        },
        "engines": {
          "node": ">= 4.4.x"
        }
      },
      "node_modules/needle/node_modules/debug": {
        "version": "3.2.7",
        "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
        "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
        "dependencies": {
          "ms": "^2.1.1"
        }
      },
      "node_modules/needle/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
      },
      "node_modules/negotiator": {
        "version": "0.6.2",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
        "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/node-addon-api": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
        "integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A=="
      },
      "node_modules/node-fetch": {
        "version": "2.6.7",
        "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",
        "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",
        "dependencies": {
          "whatwg-url": "^5.0.0"
        },
        "engines": {
          "node": "4.x || >=6.0.0"
        },
        "peerDependencies": {
          "encoding": "^0.1.0"
        },
        "peerDependenciesMeta": {
          "encoding": {
            "optional": true
          }
        }
      },
      "node_modules/node-pre-gyp": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/node-pre-gyp/-/node-pre-gyp-0.15.0.tgz",
        "integrity": "sha512-7QcZa8/fpaU/BKenjcaeFF9hLz2+7S9AqyXFhlH/rilsQ/hPZKK32RtR5EQHJElgu+q5RfbJ34KriI79UWaorA==",
        "deprecated": "Please upgrade to @mapbox/node-pre-gyp: the non-scoped node-pre-gyp package is deprecated and only the @mapbox scoped package will recieve updates in the future",
        "dependencies": {
          "detect-libc": "^1.0.2",
          "mkdirp": "^0.5.3",
          "needle": "^2.5.0",
          "nopt": "^4.0.1",
          "npm-packlist": "^1.1.6",
          "npmlog": "^4.0.2",
          "rc": "^1.2.7",
          "rimraf": "^2.6.1",
          "semver": "^5.3.0",
          "tar": "^4.4.2"
        },
        "bin": {
          "node-pre-gyp": "bin/node-pre-gyp"
        }
      },
      "node_modules/node-pre-gyp/node_modules/nopt": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
        "integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
        "dependencies": {
          "abbrev": "1",
          "osenv": "^0.1.4"
        },
        "bin": {
          "nopt": "bin/nopt.js"
        }
      },
      "node_modules/nodemon": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.3.tgz",
        "integrity": "sha512-lLQLPS90Lqwc99IHe0U94rDgvjo+G9I4uEIxRG3evSLROcqQ9hwc0AxlSHKS4T1JW/IMj/7N5mthiN58NL/5kw==",
        "dev": true,
        "hasInstallScript": true,
        "dependencies": {
          "chokidar": "^3.2.2",
          "debug": "^3.2.6",
          "ignore-by-default": "^1.0.1",
          "minimatch": "^3.0.4",
          "pstree.remy": "^1.1.7",
          "semver": "^5.7.1",
          "supports-color": "^5.5.0",
          "touch": "^3.1.0",
          "undefsafe": "^2.0.2",
          "update-notifier": "^4.0.0"
        },
        "bin": {
          "nodemon": "bin/nodemon.js"
        },
        "engines": {
          "node": ">=8.10.0"
        }
      },
      "node_modules/nodemon/node_modules/debug": {
        "version": "3.2.6",
        "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
        "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
        "deprecated": "Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)",
        "dev": true,
        "dependencies": {
          "ms": "^2.1.1"
        }
      },
      "node_modules/nodemon/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
        "dev": true
      },
      "node_modules/nopt": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
        "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
        "dev": true,
        "dependencies": {
          "abbrev": "1"
        },
        "bin": {
          "nopt": "bin/nopt.js"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true,
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/normalize-url": {
        "version": "4.5.1",
        "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.1.tgz",
        "integrity": "sha512-9UZCFRHQdNrfTpGg8+1INIg93B6zE0aXMVFkw1WFwvO4SlZywU6aLg5Of0Ap/PgcbSw4LNxvMWXMeugwMCX0AA==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/npm-bundled": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
        "integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
        "dependencies": {
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "node_modules/npm-normalize-package-bin": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
        "integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA=="
      },
      "node_modules/npm-packlist": {
        "version": "1.4.8",
        "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.8.tgz",
        "integrity": "sha512-5+AZgwru5IevF5ZdnFglB5wNlHG1AOOuw28WhUq8/8emhBmLv6jX5by4WJCh7lW0uSYZYS6DXqIsyZVIXRZU9A==",
        "dependencies": {
          "ignore-walk": "^3.0.1",
          "npm-bundled": "^1.0.1",
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "node_modules/npmlog": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
        "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
        "dependencies": {
          "are-we-there-yet": "~1.1.2",
          "console-control-strings": "~1.1.0",
          "gauge": "~2.7.3",
          "set-blocking": "~2.0.0"
        }
      },
      "node_modules/number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/object-inspect": {
        "version": "1.12.0",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.0.tgz",
        "integrity": "sha512-Ho2z80bVIvJloH+YzRmpZVQe87+qASmBUKZDWgx9cu+KDrX2ZDH/3tMy+gXbZETVGs2M8YdxObOh7XAtim9Y0g==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/object-path": {
        "version": "0.11.8",
        "resolved": "https://registry.npmjs.org/object-path/-/object-path-0.11.8.tgz",
        "integrity": "sha512-YJjNZrlXJFM42wTBn6zgOJVar9KFJvzx6sTWDte8sWZF//cnjl0BxHNpfZx+ZffXX63A9q0b1zsFiBX4g4X5KA==",
        "engines": {
          "node": ">= 10.12.0"
        }
      },
      "node_modules/object.assign": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
        "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
        "dependencies": {
          "call-bind": "^1.0.0",
          "define-properties": "^1.1.3",
          "has-symbols": "^1.0.1",
          "object-keys": "^1.1.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/object.getownpropertydescriptors": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.3.tgz",
        "integrity": "sha512-VdDoCwvJI4QdC6ndjpqFmoL3/+HxffFBbcJzKi5hwLLqqx3mdbedRpfZDdK0SrOSauj8X4GzBvnDZl4vTN7dOw==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3",
          "es-abstract": "^1.19.1"
        },
        "engines": {
          "node": ">= 0.8"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "dependencies": {
          "ee-first": "1.1.1"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "dependencies": {
          "wrappy": "1"
        }
      },
      "node_modules/os-homedir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
        "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/osenv": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
        "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
        "dependencies": {
          "os-homedir": "^1.0.0",
          "os-tmpdir": "^1.0.0"
        }
      },
      "node_modules/p-cancelable": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
        "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/package-json": {
        "version": "6.5.0",
        "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
        "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
        "dev": true,
        "dependencies": {
          "got": "^9.6.0",
          "registry-auth-token": "^4.0.0",
          "registry-url": "^5.0.0",
          "semver": "^6.2.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/package-json/node_modules/semver": {
        "version": "6.3.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
        "dev": true,
        "bin": {
          "semver": "bin/semver.js"
        }
      },
      "node_modules/parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
      },
      "node_modules/picomatch": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
        "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
        "dev": true,
        "engines": {
          "node": ">=8.6"
        },
        "funding": {
          "url": "https://github.com/sponsors/jonschlinkert"
        }
      },
      "node_modules/prepend-http": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
        "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
        "dev": true,
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
      },
      "node_modules/proxy-addr": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
        "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
        "dependencies": {
          "forwarded": "~0.1.2",
          "ipaddr.js": "1.9.1"
        },
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/pstree.remy": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.7.tgz",
        "integrity": "sha512-xsMgrUwRpuGskEzBFkH8NmTimbZ5PcPup0LA8JJkHIm2IMUbQcpo3yeLNWVrufEYjh8YwtSVh0xz6UeWc5Oh5A==",
        "dev": true
      },
      "node_modules/pump": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
        "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
        "dev": true,
        "dependencies": {
          "end-of-stream": "^1.1.0",
          "once": "^1.3.1"
        }
      },
      "node_modules/pupa": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.0.1.tgz",
        "integrity": "sha512-hEJH0s8PXLY/cdXh66tNEQGndDrIKNqNC5xmrysZy3i5C3oEoLna7YAOad+7u125+zH1HNXUmGEkrhb3c2VriA==",
        "dev": true,
        "dependencies": {
          "escape-goat": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/qs": {
        "version": "6.7.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
        "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
        "engines": {
          "node": ">=0.6"
        }
      },
      "node_modules/range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/raw-body": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
        "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
        "dependencies": {
          "bytes": "3.1.0",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/rc": {
        "version": "1.2.8",
        "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
        "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
        "dependencies": {
          "deep-extend": "^0.6.0",
          "ini": "~1.3.0",
          "minimist": "^1.2.0",
          "strip-json-comments": "~2.0.1"
        },
        "bin": {
          "rc": "cli.js"
        }
      },
      "node_modules/readable-stream": {
        "version": "2.3.7",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
        "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
        "dependencies": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        }
      },
      "node_modules/readdirp": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
        "integrity": "sha512-zz0pAkSPOXXm1viEwygWIPSPkcBYjW1xU5j/JBh5t9bGCJwa6f9+BJa6VaB2g+b55yVrmXzqkyLf4xaWYM0IkQ==",
        "dev": true,
        "dependencies": {
          "picomatch": "^2.0.7"
        },
        "engines": {
          "node": ">=8.10.0"
        }
      },
      "node_modules/regexp-clone": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
        "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
      },
      "node_modules/registry-auth-token": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.1.1.tgz",
        "integrity": "sha512-9bKS7nTl9+/A1s7tnPeGrUpRcVY+LUh7bfFgzpndALdPfXQBfQV77rQVtqgUV3ti4vc/Ik81Ex8UJDWDQ12zQA==",
        "dev": true,
        "dependencies": {
          "rc": "^1.2.8"
        },
        "engines": {
          "node": ">=6.0.0"
        }
      },
      "node_modules/registry-url": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
        "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
        "dev": true,
        "dependencies": {
          "rc": "^1.2.8"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/require_optional": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
        "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
        "dependencies": {
          "resolve-from": "^2.0.0",
          "semver": "^5.1.0"
        }
      },
      "node_modules/require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/resolve-from": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
        "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/responselike": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
        "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
        "dev": true,
        "dependencies": {
          "lowercase-keys": "^1.0.0"
        }
      },
      "node_modules/retry": {
        "version": "0.13.1",
        "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
        "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==",
        "engines": {
          "node": ">= 4"
        }
      },
      "node_modules/rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "dependencies": {
          "glob": "^7.1.3"
        },
        "bin": {
          "rimraf": "bin.js"
        }
      },
      "node_modules/rxjs": {
        "version": "6.6.7",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
        "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
        "dependencies": {
          "tslib": "^1.9.0"
        },
        "engines": {
          "npm": ">=2.0.0"
        }
      },
      "node_modules/rxjs/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      },
      "node_modules/safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
      },
      "node_modules/safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "node_modules/saslprep": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
        "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
        "optional": true,
        "dependencies": {
          "sparse-bitfield": "^3.0.3"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "node_modules/semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
        "bin": {
          "semver": "bin/semver"
        }
      },
      "node_modules/semver-diff": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
        "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
        "dev": true,
        "dependencies": {
          "semver": "^6.3.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/semver-diff/node_modules/semver": {
        "version": "6.3.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
        "dev": true,
        "bin": {
          "semver": "bin/semver.js"
        }
      },
      "node_modules/send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "dependencies": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/send/node_modules/ms": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
        "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
      },
      "node_modules/serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "dependencies": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
      },
      "node_modules/setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
      },
      "node_modules/sha.js": {
        "version": "2.4.11",
        "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
        "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
        "dependencies": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        },
        "bin": {
          "sha.js": "bin.js"
        }
      },
      "node_modules/side-channel": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
        "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
        "dependencies": {
          "call-bind": "^1.0.0",
          "get-intrinsic": "^1.0.2",
          "object-inspect": "^1.9.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/sift": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
        "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
      },
      "node_modules/signal-exit": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
        "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
      },
      "node_modules/sliced": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
        "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
      },
      "node_modules/sparse-bitfield": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
        "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
        "optional": true,
        "dependencies": {
          "memory-pager": "^1.0.2"
        }
      },
      "node_modules/spawn-command": {
        "version": "0.0.2-1",
        "resolved": "https://registry.npmjs.org/spawn-command/-/spawn-command-0.0.2-1.tgz",
        "integrity": "sha1-YvXpRmmBwbeW3Fkpk34RycaSG9A="
      },
      "node_modules/statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/streamsearch": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
        "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo=",
        "engines": {
          "node": ">=0.8.0"
        }
      },
      "node_modules/string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "dependencies": {
          "safe-buffer": "~5.1.0"
        }
      },
      "node_modules/string-width": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
        "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
        "dependencies": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/string-width/node_modules/ansi-regex": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
        "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/string-width/node_modules/emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
      },
      "node_modules/string-width/node_modules/is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/string-width/node_modules/strip-ansi": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
        "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
        "dependencies": {
          "ansi-regex": "^5.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/string.prototype.trimend": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
        "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/string.prototype.trimstart": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
        "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
        "dependencies": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/strip-ansi": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
        "dev": true,
        "dependencies": {
          "ansi-regex": "^4.1.0"
        },
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/strip-json-comments": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
        "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/subscriptions-transport-ws": {
        "version": "0.9.19",
        "resolved": "https://registry.npmjs.org/subscriptions-transport-ws/-/subscriptions-transport-ws-0.9.19.tgz",
        "integrity": "sha512-dxdemxFFB0ppCLg10FTtRqH/31FNRL1y1BQv8209MK5I4CwALb7iihQg+7p65lFcIl8MHatINWBLOqpgU4Kyyw==",
        "dependencies": {
          "backo2": "^1.0.2",
          "eventemitter3": "^3.1.0",
          "iterall": "^1.2.1",
          "symbol-observable": "^1.0.4",
          "ws": "^5.2.0 || ^6.0.0 || ^7.0.0"
        },
        "peerDependencies": {
          "graphql": ">=0.10.0"
        }
      },
      "node_modules/supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "dev": true,
        "dependencies": {
          "has-flag": "^3.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/symbol-observable": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
        "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/tar": {
        "version": "4.4.19",
        "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.19.tgz",
        "integrity": "sha512-a20gEsvHnWe0ygBY8JbxoM4w3SJdhc7ZAuxkLqh+nvNQN2IOt0B5lLgM490X5Hl8FF0dl0tOf2ewFYAlIFgzVA==",
        "dependencies": {
          "chownr": "^1.1.4",
          "fs-minipass": "^1.2.7",
          "minipass": "^2.9.0",
          "minizlib": "^1.3.3",
          "mkdirp": "^0.5.5",
          "safe-buffer": "^5.2.1",
          "yallist": "^3.1.1"
        },
        "engines": {
          "node": ">=4.5"
        }
      },
      "node_modules/tar/node_modules/safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/term-size": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.0.tgz",
        "integrity": "sha512-a6sumDlzyHVJWb8+YofY4TW112G6p2FCPEAFk+59gIYHv3XHRhm9ltVQ9kli4hNWeQBwSpe8cRN25x0ROunMOw==",
        "dev": true,
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/to-readable-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
        "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
        "dev": true,
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dev": true,
        "dependencies": {
          "is-number": "^7.0.0"
        },
        "engines": {
          "node": ">=8.0"
        }
      },
      "node_modules/toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
        "engines": {
          "node": ">=0.6"
        }
      },
      "node_modules/touch": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
        "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
        "dev": true,
        "dependencies": {
          "nopt": "~1.0.10"
        },
        "bin": {
          "nodetouch": "bin/nodetouch.js"
        }
      },
      "node_modules/tr46": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
        "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o="
      },
      "node_modules/tree-kill": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
        "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
        "bin": {
          "tree-kill": "cli.js"
        }
      },
      "node_modules/ts-invariant": {
        "version": "0.4.4",
        "resolved": "https://registry.npmjs.org/ts-invariant/-/ts-invariant-0.4.4.tgz",
        "integrity": "sha512-uEtWkFM/sdZvRNNDL3Ehu4WVpwaulhwQszV8mrtcdeE8nN00BV9mAmQ88RkrBhFgl9gMgvjJLAQcZbnPXI9mlA==",
        "dependencies": {
          "tslib": "^1.9.3"
        }
      },
      "node_modules/ts-invariant/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      },
      "node_modules/tslib": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
        "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
      },
      "node_modules/type-fest": {
        "version": "0.8.1",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
        "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "dependencies": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/typedarray-to-buffer": {
        "version": "3.1.5",
        "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
        "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
        "dev": true,
        "dependencies": {
          "is-typedarray": "^1.0.0"
        }
      },
      "node_modules/unbox-primitive": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
        "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
        "dependencies": {
          "function-bind": "^1.1.1",
          "has-bigints": "^1.0.1",
          "has-symbols": "^1.0.2",
          "which-boxed-primitive": "^1.0.2"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/undefsafe": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.3.tgz",
        "integrity": "sha512-nrXZwwXrD/T/JXeygJqdCO6NZZ1L66HrxM/Z7mIq2oPanoN0F1nLx3lwJMu6AwJY69hdixaFQOuoYsMjE5/C2A==",
        "dev": true,
        "dependencies": {
          "debug": "^2.2.0"
        }
      },
      "node_modules/unique-string": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
        "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
        "dev": true,
        "dependencies": {
          "crypto-random-string": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/update-notifier": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.0.tgz",
        "integrity": "sha512-w3doE1qtI0/ZmgeoDoARmI5fjDoT93IfKgEGqm26dGUOh8oNpaSTsGNdYRN/SjOuo10jcJGwkEL3mroKzktkew==",
        "dev": true,
        "dependencies": {
          "boxen": "^4.2.0",
          "chalk": "^3.0.0",
          "configstore": "^5.0.1",
          "has-yarn": "^2.1.0",
          "import-lazy": "^2.1.0",
          "is-ci": "^2.0.0",
          "is-installed-globally": "^0.3.1",
          "is-npm": "^4.0.0",
          "is-yarn-global": "^0.3.0",
          "latest-version": "^5.0.0",
          "pupa": "^2.0.1",
          "semver-diff": "^3.1.1",
          "xdg-basedir": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/yeoman/update-notifier?sponsor=1"
        }
      },
      "node_modules/url-parse-lax": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
        "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
        "dev": true,
        "dependencies": {
          "prepend-http": "^2.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "node_modules/util.promisify": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.1.1.tgz",
        "integrity": "sha512-/s3UsZUrIfa6xDhr7zZhnE9SLQ5RIXyYfiVnMMyMDzOc8WhWN4Nbh36H842OyurKbCDAesZOJaVyvmSl6fhGQw==",
        "dependencies": {
          "call-bind": "^1.0.0",
          "define-properties": "^1.1.3",
          "for-each": "^0.3.3",
          "has-symbols": "^1.0.1",
          "object.getownpropertydescriptors": "^2.1.1"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
        "engines": {
          "node": ">= 0.4.0"
        }
      },
      "node_modules/uuid": {
        "version": "8.3.2",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
        "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
        "bin": {
          "uuid": "dist/bin/uuid"
        }
      },
      "node_modules/vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/webidl-conversions": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
        "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE="
      },
      "node_modules/whatwg-url": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
        "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
        "dependencies": {
          "tr46": "~0.0.3",
          "webidl-conversions": "^3.0.0"
        }
      },
      "node_modules/which-boxed-primitive": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
        "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
        "dependencies": {
          "is-bigint": "^1.0.1",
          "is-boolean-object": "^1.1.0",
          "is-number-object": "^1.0.4",
          "is-string": "^1.0.5",
          "is-symbol": "^1.0.3"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/wide-align": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
        "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
        "dependencies": {
          "string-width": "^1.0.2 || 2"
        }
      },
      "node_modules/wide-align/node_modules/ansi-regex": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/wide-align/node_modules/string-width": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
        "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
        "dependencies": {
          "is-fullwidth-code-point": "^2.0.0",
          "strip-ansi": "^4.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/wide-align/node_modules/strip-ansi": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
        "dependencies": {
          "ansi-regex": "^3.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/widest-line": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
        "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
        "dev": true,
        "dependencies": {
          "string-width": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/wrap-ansi": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
        "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
        "dependencies": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
        }
      },
      "node_modules/wrap-ansi/node_modules/ansi-regex": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
        "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/wrap-ansi/node_modules/strip-ansi": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
        "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
        "dependencies": {
          "ansi-regex": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "node_modules/write-file-atomic": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
        "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
        "dev": true,
        "dependencies": {
          "imurmurhash": "^0.1.4",
          "is-typedarray": "^1.0.0",
          "signal-exit": "^3.0.2",
          "typedarray-to-buffer": "^3.1.5"
        }
      },
      "node_modules/ws": {
        "version": "7.5.7",
        "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.7.tgz",
        "integrity": "sha512-KMvVuFzpKBuiIXW3E4u3mySRO2/mCHSyZDJQM5NQ9Q9KHWHWh0NHgfbRMLLrceUK5qAL4ytALJbpRMjixFZh8A==",
        "engines": {
          "node": ">=8.3.0"
        },
        "peerDependencies": {
          "bufferutil": "^4.0.1",
          "utf-8-validate": "^5.0.2"
        },
        "peerDependenciesMeta": {
          "bufferutil": {
            "optional": true
          },
          "utf-8-validate": {
            "optional": true
          }
        }
      },
      "node_modules/xdg-basedir": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
        "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
        "dev": true,
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/xss": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/xss/-/xss-1.0.10.tgz",
        "integrity": "sha512-qmoqrRksmzqSKvgqzN0055UFWY7OKx1/9JWeRswwEVX9fCG5jcYRxa/A2DHcmZX6VJvjzHRQ2STeeVcQkrmLSw==",
        "dependencies": {
          "commander": "^2.20.3",
          "cssfilter": "0.0.10"
        },
        "bin": {
          "xss": "bin/xss"
        },
        "engines": {
          "node": ">= 0.10.0"
        }
      },
      "node_modules/y18n": {
        "version": "5.0.8",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
        "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/yallist": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
        "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
      },
      "node_modules/yargs": {
        "version": "16.2.0",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
        "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
        "dependencies": {
          "cliui": "^7.0.2",
          "escalade": "^3.1.1",
          "get-caller-file": "^2.0.5",
          "require-directory": "^2.1.1",
          "string-width": "^4.2.0",
          "y18n": "^5.0.5",
          "yargs-parser": "^20.2.2"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/yargs-parser": {
        "version": "20.2.9",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
        "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/zen-observable": {
        "version": "0.8.15",
        "resolved": "https://registry.npmjs.org/zen-observable/-/zen-observable-0.8.15.tgz",
        "integrity": "sha512-PQ2PC7R9rslx84ndNBZB/Dkv8V8fZEpk83RLgXtYd0fwUgEjseMn1Dgajh2x6S8QbZAFa9p2qVCEuYZNgve0dQ=="
      },
      "node_modules/zen-observable-ts": {
        "version": "0.8.21",
        "resolved": "https://registry.npmjs.org/zen-observable-ts/-/zen-observable-ts-0.8.21.tgz",
        "integrity": "sha512-Yj3yXweRc8LdRMrCC8nIc4kkjWecPAUVh0TI0OUrWXx6aX790vLcDlWca6I4vsyCGH3LpWxq0dJRcMOFoVqmeg==",
        "dependencies": {
          "tslib": "^1.9.3",
          "zen-observable": "^0.8.0"
        }
      },
      "node_modules/zen-observable-ts/node_modules/tslib": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
        "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
      }
    },
    "dependencies": {
      "@apollo/protobufjs": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/@apollo/protobufjs/-/protobufjs-1.2.2.tgz",
        "integrity": "sha512-vF+zxhPiLtkwxONs6YanSt1EpwpGilThpneExUN5K3tCymuxNnVq2yojTvnpRjv2QfsEIt/n7ozPIIzBLwGIDQ==",
        "requires": {
          "@protobufjs/aspromise": "^1.1.2",
          "@protobufjs/base64": "^1.1.2",
          "@protobufjs/codegen": "^2.0.4",
          "@protobufjs/eventemitter": "^1.1.0",
          "@protobufjs/fetch": "^1.1.0",
          "@protobufjs/float": "^1.0.2",
          "@protobufjs/inquire": "^1.1.0",
          "@protobufjs/path": "^1.1.2",
          "@protobufjs/pool": "^1.1.0",
          "@protobufjs/utf8": "^1.1.0",
          "@types/long": "^4.0.0",
          "@types/node": "^10.1.0",
          "long": "^4.0.0"
        },
        "dependencies": {
          "@types/node": {
            "version": "10.17.60",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-10.17.60.tgz",
            "integrity": "sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw=="
          }
        }
      },
      "@apollographql/apollo-tools": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/@apollographql/apollo-tools/-/apollo-tools-0.5.2.tgz",
        "integrity": "sha512-KxZiw0Us3k1d0YkJDhOpVH5rJ+mBfjXcgoRoCcslbgirjgLotKMzOcx4PZ7YTEvvEROmvG7X3Aon41GvMmyGsw=="
      },
      "@apollographql/graphql-playground-html": {
        "version": "1.6.27",
        "resolved": "https://registry.npmjs.org/@apollographql/graphql-playground-html/-/graphql-playground-html-1.6.27.tgz",
        "integrity": "sha512-tea2LweZvn6y6xFV11K0KC8ETjmm52mQrW+ezgB2O/aTQf8JGyFmMcRPFgUaQZeHbWdm8iisDC6EjOKsXu0nfw==",
        "requires": {
          "xss": "^1.0.8"
        }
      },
      "@apollographql/graphql-upload-8-fork": {
        "version": "8.1.3",
        "resolved": "https://registry.npmjs.org/@apollographql/graphql-upload-8-fork/-/graphql-upload-8-fork-8.1.3.tgz",
        "integrity": "sha512-ssOPUT7euLqDXcdVv3Qs4LoL4BPtfermW1IOouaqEmj36TpHYDmYDIbKoSQxikd9vtMumFnP87OybH7sC9fJ6g==",
        "requires": {
          "@types/express": "*",
          "@types/fs-capacitor": "*",
          "@types/koa": "*",
          "busboy": "^0.3.1",
          "fs-capacitor": "^2.0.4",
          "http-errors": "^1.7.3",
          "object-path": "^0.11.4"
        },
        "dependencies": {
          "http-errors": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz",
            "integrity": "sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==",
            "requires": {
              "depd": "~1.1.2",
              "inherits": "2.0.4",
              "setprototypeof": "1.2.0",
              "statuses": ">= 1.5.0 < 2",
              "toidentifier": "1.0.1"
            }
          },
          "inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
          },
          "setprototypeof": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
            "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
          },
          "toidentifier": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
            "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
          }
        }
      },
      "@josephg/resolvable": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/@josephg/resolvable/-/resolvable-1.0.1.tgz",
        "integrity": "sha512-CtzORUwWTTOTqfVtHaKRJ0I1kNQd1bpn3sUh8I3nJDVY+5/M/Oe1DnEWzPQvqq/xPIIkzzzIP7mfCoAjFRvDhg=="
      },
      "@protobufjs/aspromise": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
        "integrity": "sha1-m4sMxmPWaafY9vXQiToU00jzD78="
      },
      "@protobufjs/base64": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
        "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg=="
      },
      "@protobufjs/codegen": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.4.tgz",
        "integrity": "sha512-YyFaikqM5sH0ziFZCN3xDC7zeGaB/d0IUb9CATugHWbd1FRFwWwt4ld4OYMPWu5a3Xe01mGAULCdqhMlPl29Jg=="
      },
      "@protobufjs/eventemitter": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz",
        "integrity": "sha1-NVy8mLr61ZePntCV85diHx0Ga3A="
      },
      "@protobufjs/fetch": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz",
        "integrity": "sha1-upn7WYYUr2VwDBYZ/wbUVLDYTEU=",
        "requires": {
          "@protobufjs/aspromise": "^1.1.1",
          "@protobufjs/inquire": "^1.1.0"
        }
      },
      "@protobufjs/float": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
        "integrity": "sha1-Xp4avctz/Ap8uLKR33jIy9l7h9E="
      },
      "@protobufjs/inquire": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.0.tgz",
        "integrity": "sha1-/yAOPnzyQp4tyvwRQIKOjMY48Ik="
      },
      "@protobufjs/path": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
        "integrity": "sha1-bMKyDFya1q0NzP0hynZz2Nf79o0="
      },
      "@protobufjs/pool": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
        "integrity": "sha1-Cf0V8tbTq/qbZbw2ZQbWrXhG/1Q="
      },
      "@protobufjs/utf8": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.0.tgz",
        "integrity": "sha1-p3c2C1s5oaLlEG+OhY8v0tBgxXA="
      },
      "@sindresorhus/is": {
        "version": "0.14.0",
        "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
        "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
        "dev": true
      },
      "@szmarczak/http-timer": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
        "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
        "dev": true,
        "requires": {
          "defer-to-connect": "^1.0.1"
        }
      },
      "@types/accepts": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/@types/accepts/-/accepts-1.3.5.tgz",
        "integrity": "sha512-jOdnI/3qTpHABjM5cx1Hc0sKsPoYCp+DP/GJRGtDlPd7fiV9oXGGIcjW/ZOxLIvjGz8MA+uMZI9metHlgqbgwQ==",
        "requires": {
          "@types/node": "*"
        }
      },
      "@types/body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-W98JrE0j2K78swW4ukqMleo8R7h/pFETjM2DQ90MF6XK2i4LO4W3gQ71Lt4w3bfm2EvVSyWHplECvB5sK22yFQ==",
        "requires": {
          "@types/connect": "*",
          "@types/node": "*"
        }
      },
      "@types/color-name": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
        "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ=="
      },
      "@types/connect": {
        "version": "3.4.35",
        "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.35.tgz",
        "integrity": "sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==",
        "requires": {
          "@types/node": "*"
        }
      },
      "@types/content-disposition": {
        "version": "0.5.4",
        "resolved": "https://registry.npmjs.org/@types/content-disposition/-/content-disposition-0.5.4.tgz",
        "integrity": "sha512-0mPF08jn9zYI0n0Q/Pnz7C4kThdSt+6LD4amsrYDDpgBfrVWa3TcCOxKX1zkGgYniGagRv8heN2cbh+CAn+uuQ=="
      },
      "@types/cookies": {
        "version": "0.7.7",
        "resolved": "https://registry.npmjs.org/@types/cookies/-/cookies-0.7.7.tgz",
        "integrity": "sha512-h7BcvPUogWbKCzBR2lY4oqaZbO3jXZksexYJVFvkrFeLgbZjQkU4x8pRq6eg2MHXQhY0McQdqmmsxRWlVAHooA==",
        "requires": {
          "@types/connect": "*",
          "@types/express": "*",
          "@types/keygrip": "*",
          "@types/node": "*"
        }
      },
      "@types/cors": {
        "version": "2.8.10",
        "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.10.tgz",
        "integrity": "sha512-C7srjHiVG3Ey1nR6d511dtDkCEjxuN9W1HWAEjGq8kpcwmNM6JJkpC0xvabM7BXTG2wDq8Eu33iH9aQKa7IvLQ=="
      },
      "@types/express": {
        "version": "4.17.13",
        "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.13.tgz",
        "integrity": "sha512-6bSZTPaTIACxn48l50SR+axgrqm6qXFIxrdAKaG6PaJk3+zuUr35hBlgT7vOmJcum+OEaIBLtHV/qloEAFITeA==",
        "requires": {
          "@types/body-parser": "*",
          "@types/express-serve-static-core": "^4.17.18",
          "@types/qs": "*",
          "@types/serve-static": "*"
        }
      },
      "@types/express-serve-static-core": {
        "version": "4.17.28",
        "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.28.tgz",
        "integrity": "sha512-P1BJAEAW3E2DJUlkgq4tOL3RyMunoWXqbSCygWo5ZIWTjUgN1YnaXWW4VWl/oc8vs/XoYibEGBKP0uZyF4AHig==",
        "requires": {
          "@types/node": "*",
          "@types/qs": "*",
          "@types/range-parser": "*"
        }
      },
      "@types/fs-capacitor": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@types/fs-capacitor/-/fs-capacitor-2.0.0.tgz",
        "integrity": "sha512-FKVPOCFbhCvZxpVAMhdBdTfVfXUpsh15wFHgqOKxh9N9vzWZVuWCSijZ5T4U34XYNnuj2oduh6xcs1i+LPI+BQ==",
        "requires": {
          "@types/node": "*"
        }
      },
      "@types/http-assert": {
        "version": "1.5.3",
        "resolved": "https://registry.npmjs.org/@types/http-assert/-/http-assert-1.5.3.tgz",
        "integrity": "sha512-FyAOrDuQmBi8/or3ns4rwPno7/9tJTijVW6aQQjK02+kOQ8zmoNg2XJtAuQhvQcy1ASJq38wirX5//9J1EqoUA=="
      },
      "@types/http-errors": {
        "version": "1.8.2",
        "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-1.8.2.tgz",
        "integrity": "sha512-EqX+YQxINb+MeXaIqYDASb6U6FCHbWjkj4a1CKDBks3d/QiB2+PqBLyO72vLDgAO1wUI4O+9gweRcQK11bTL/w=="
      },
      "@types/keygrip": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/@types/keygrip/-/keygrip-1.0.2.tgz",
        "integrity": "sha512-GJhpTepz2udxGexqos8wgaBx4I/zWIDPh/KOGEwAqtuGDkOUJu5eFvwmdBX4AmB8Odsr+9pHCQqiAqDL/yKMKw=="
      },
      "@types/koa": {
        "version": "2.13.4",
        "resolved": "https://registry.npmjs.org/@types/koa/-/koa-2.13.4.tgz",
        "integrity": "sha512-dfHYMfU+z/vKtQB7NUrthdAEiSvnLebvBjwHtfFmpZmB7em2N3WVQdHgnFq+xvyVgxW5jKDmjWfLD3lw4g4uTw==",
        "requires": {
          "@types/accepts": "*",
          "@types/content-disposition": "*",
          "@types/cookies": "*",
          "@types/http-assert": "*",
          "@types/http-errors": "*",
          "@types/keygrip": "*",
          "@types/koa-compose": "*",
          "@types/node": "*"
        }
      },
      "@types/koa-compose": {
        "version": "3.2.5",
        "resolved": "https://registry.npmjs.org/@types/koa-compose/-/koa-compose-3.2.5.tgz",
        "integrity": "sha512-B8nG/OoE1ORZqCkBVsup/AKcvjdgoHnfi4pZMn5UwAPCbhk/96xyv284eBYW8JlQbQ7zDmnpFr68I/40mFoIBQ==",
        "requires": {
          "@types/koa": "*"
        }
      },
      "@types/long": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/@types/long/-/long-4.0.1.tgz",
        "integrity": "sha512-5tXH6Bx/kNGd3MgffdmP4dy2Z+G4eaXw0SE81Tq3BNadtnMR5/ySMzX4SLEzHJzSmPNn4HIdpQsBvXMUykr58w=="
      },
      "@types/mime": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.2.tgz",
        "integrity": "sha512-YATxVxgRqNH6nHEIsvg6k2Boc1JHI9ZbH5iWFFv/MTkchz3b1ieGDa5T0a9RznNdI0KhVbdbWSN+KWWrQZRxTw=="
      },
      "@types/node": {
        "version": "17.0.18",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.18.tgz",
        "integrity": "sha512-eKj4f/BsN/qcculZiRSujogjvp5O/k4lOW5m35NopjZM/QwLOR075a8pJW5hD+Rtdm2DaCVPENS6KtSQnUD6BA=="
      },
      "@types/qs": {
        "version": "6.9.7",
        "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.7.tgz",
        "integrity": "sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw=="
      },
      "@types/range-parser": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.4.tgz",
        "integrity": "sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw=="
      },
      "@types/serve-static": {
        "version": "1.13.10",
        "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.13.10.tgz",
        "integrity": "sha512-nCkHGI4w7ZgAdNkrEu0bv+4xNV/XDqW+DydknebMOQwkpDGx8G+HTlj7R7ABI8i8nKxVw0wtKPi1D+lPOkh4YQ==",
        "requires": {
          "@types/mime": "^1",
          "@types/node": "*"
        }
      },
      "@types/ws": {
        "version": "7.4.7",
        "resolved": "https://registry.npmjs.org/@types/ws/-/ws-7.4.7.tgz",
        "integrity": "sha512-JQbbmxZTZehdc2iszGKs5oC3NFnjeay7mtAWrdt7qNtAVK0g19muApzAy4bm9byz79xa2ZnO/BOBC2R8RC5Lww==",
        "requires": {
          "@types/node": "*"
        }
      },
      "@wry/equality": {
        "version": "0.1.11",
        "resolved": "https://registry.npmjs.org/@wry/equality/-/equality-0.1.11.tgz",
        "integrity": "sha512-mwEVBDUVODlsQQ5dfuLUS5/Tf7jqUKyhKYHmVi4fPB6bDMOfWvUPJmKgS1Z7Za/sOI3vzWt4+O7yCiL/70MogA==",
        "requires": {
          "tslib": "^1.9.3"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      },
      "abbrev": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
      },
      "accepts": {
        "version": "1.3.7",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
        "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
        "requires": {
          "mime-types": "~2.1.24",
          "negotiator": "0.6.2"
        }
      },
      "ansi-align": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
        "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
        "dev": true,
        "requires": {
          "string-width": "^3.0.0"
        },
        "dependencies": {
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "dev": true,
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          }
        }
      },
      "ansi-regex": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
        "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
        "dev": true
      },
      "ansi-styles": {
        "version": "4.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
        "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
        "requires": {
          "@types/color-name": "^1.1.1",
          "color-convert": "^2.0.1"
        }
      },
      "anymatch": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
        "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
        "dev": true,
        "requires": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        }
      },
      "apollo-cache-control": {
        "version": "0.14.0",
        "resolved": "https://registry.npmjs.org/apollo-cache-control/-/apollo-cache-control-0.14.0.tgz",
        "integrity": "sha512-qN4BCq90egQrgNnTRMUHikLZZAprf3gbm8rC5Vwmc6ZdLolQ7bFsa769Hqi6Tq/lS31KLsXBLTOsRbfPHph12w==",
        "requires": {
          "apollo-server-env": "^3.1.0",
          "apollo-server-plugin-base": "^0.13.0"
        }
      },
      "apollo-datasource": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/apollo-datasource/-/apollo-datasource-0.9.0.tgz",
        "integrity": "sha512-y8H99NExU1Sk4TvcaUxTdzfq2SZo6uSj5dyh75XSQvbpH6gdAXIW9MaBcvlNC7n0cVPsidHmOcHOWxJ/pTXGjA==",
        "requires": {
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0"
        }
      },
      "apollo-graphql": {
        "version": "0.9.5",
        "resolved": "https://registry.npmjs.org/apollo-graphql/-/apollo-graphql-0.9.5.tgz",
        "integrity": "sha512-RGt5k2JeBqrmnwRM0VOgWFiGKlGJMfmiif/4JvdaEqhMJ+xqe/9cfDYzXfn33ke2eWixsAbjEbRfy8XbaN9nTw==",
        "requires": {
          "core-js-pure": "^3.10.2",
          "lodash.sortby": "^4.7.0",
          "sha.js": "^2.4.11"
        }
      },
      "apollo-link": {
        "version": "1.2.14",
        "resolved": "https://registry.npmjs.org/apollo-link/-/apollo-link-1.2.14.tgz",
        "integrity": "sha512-p67CMEFP7kOG1JZ0ZkYZwRDa369w5PIjtMjvrQd/HnIV8FRsHRqLqK+oAZQnFa1DDdZtOtHTi+aMIW6EatC2jg==",
        "requires": {
          "apollo-utilities": "^1.3.0",
          "ts-invariant": "^0.4.0",
          "tslib": "^1.9.3",
          "zen-observable-ts": "^0.8.21"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      },
      "apollo-reporting-protobuf": {
        "version": "0.8.0",
        "resolved": "https://registry.npmjs.org/apollo-reporting-protobuf/-/apollo-reporting-protobuf-0.8.0.tgz",
        "integrity": "sha512-B3XmnkH6Y458iV6OsA7AhfwvTgeZnFq9nPVjbxmLKnvfkEl8hYADtz724uPa0WeBiD7DSFcnLtqg9yGmCkBohg==",
        "requires": {
          "@apollo/protobufjs": "1.2.2"
        }
      },
      "apollo-server-caching": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/apollo-server-caching/-/apollo-server-caching-0.7.0.tgz",
        "integrity": "sha512-MsVCuf/2FxuTFVhGLK13B+TZH9tBd2qkyoXKKILIiGcZ5CDUEBO14vIV63aNkMkS1xxvK2U4wBcuuNj/VH2Mkw==",
        "requires": {
          "lru-cache": "^6.0.0"
        }
      },
      "apollo-server-core": {
        "version": "2.25.3",
        "resolved": "https://registry.npmjs.org/apollo-server-core/-/apollo-server-core-2.25.3.tgz",
        "integrity": "sha512-Midow3uZoJ9TjFNeCNSiWElTVZlvmB7G7tG6PPoxIR9Px90/v16Q6EzunDIO0rTJHRC3+yCwZkwtf8w2AcP0sA==",
        "requires": {
          "@apollographql/apollo-tools": "^0.5.0",
          "@apollographql/graphql-playground-html": "1.6.27",
          "@apollographql/graphql-upload-8-fork": "^8.1.3",
          "@josephg/resolvable": "^1.0.0",
          "@types/ws": "^7.0.0",
          "apollo-cache-control": "^0.14.0",
          "apollo-datasource": "^0.9.0",
          "apollo-graphql": "^0.9.0",
          "apollo-reporting-protobuf": "^0.8.0",
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0",
          "apollo-server-errors": "^2.5.0",
          "apollo-server-plugin-base": "^0.13.0",
          "apollo-server-types": "^0.9.0",
          "apollo-tracing": "^0.15.0",
          "async-retry": "^1.2.1",
          "fast-json-stable-stringify": "^2.0.0",
          "graphql-extensions": "^0.15.0",
          "graphql-tag": "^2.11.0",
          "graphql-tools": "^4.0.8",
          "loglevel": "^1.6.7",
          "lru-cache": "^6.0.0",
          "sha.js": "^2.4.11",
          "subscriptions-transport-ws": "^0.9.19",
          "uuid": "^8.0.0"
        }
      },
      "apollo-server-env": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/apollo-server-env/-/apollo-server-env-3.1.0.tgz",
        "integrity": "sha512-iGdZgEOAuVop3vb0F2J3+kaBVi4caMoxefHosxmgzAbbSpvWehB8Y1QiSyyMeouYC38XNVk5wnZl+jdGSsWsIQ==",
        "requires": {
          "node-fetch": "^2.6.1",
          "util.promisify": "^1.0.0"
        }
      },
      "apollo-server-errors": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/apollo-server-errors/-/apollo-server-errors-2.5.0.tgz",
        "integrity": "sha512-lO5oTjgiC3vlVg2RKr3RiXIIQ5pGXBFxYGGUkKDhTud3jMIhs+gel8L8zsEjKaKxkjHhCQAA/bcEfYiKkGQIvA==",
        "requires": {}
      },
      "apollo-server-express": {
        "version": "2.25.3",
        "resolved": "https://registry.npmjs.org/apollo-server-express/-/apollo-server-express-2.25.3.tgz",
        "integrity": "sha512-tTFYn0oKH2qqLwVj7Ez2+MiKleXACODiGh5IxsB7VuYCPMAi9Yl8iUSlwTjQUvgCWfReZjnf0vFL2k5YhDlrtQ==",
        "requires": {
          "@apollographql/graphql-playground-html": "1.6.27",
          "@types/accepts": "^1.3.5",
          "@types/body-parser": "1.19.0",
          "@types/cors": "2.8.10",
          "@types/express": "^4.17.12",
          "@types/express-serve-static-core": "^4.17.21",
          "accepts": "^1.3.5",
          "apollo-server-core": "^2.25.3",
          "apollo-server-types": "^0.9.0",
          "body-parser": "^1.18.3",
          "cors": "^2.8.5",
          "express": "^4.17.1",
          "graphql-subscriptions": "^1.0.0",
          "graphql-tools": "^4.0.8",
          "parseurl": "^1.3.2",
          "subscriptions-transport-ws": "^0.9.19",
          "type-is": "^1.6.16"
        }
      },
      "apollo-server-plugin-base": {
        "version": "0.13.0",
        "resolved": "https://registry.npmjs.org/apollo-server-plugin-base/-/apollo-server-plugin-base-0.13.0.tgz",
        "integrity": "sha512-L3TMmq2YE6BU6I4Tmgygmd0W55L+6XfD9137k+cWEBFu50vRY4Re+d+fL5WuPkk5xSPKd/PIaqzidu5V/zz8Kg==",
        "requires": {
          "apollo-server-types": "^0.9.0"
        }
      },
      "apollo-server-types": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/apollo-server-types/-/apollo-server-types-0.9.0.tgz",
        "integrity": "sha512-qk9tg4Imwpk732JJHBkhW0jzfG0nFsLqK2DY6UhvJf7jLnRePYsPxWfPiNkxni27pLE2tiNlCwoDFSeWqpZyBg==",
        "requires": {
          "apollo-reporting-protobuf": "^0.8.0",
          "apollo-server-caching": "^0.7.0",
          "apollo-server-env": "^3.1.0"
        }
      },
      "apollo-tracing": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/apollo-tracing/-/apollo-tracing-0.15.0.tgz",
        "integrity": "sha512-UP0fztFvaZPHDhIB/J+qGuy6hWO4If069MGC98qVs0I8FICIGu4/8ykpX3X3K6RtaQ56EDAWKykCxFv4ScxMeA==",
        "requires": {
          "apollo-server-env": "^3.1.0",
          "apollo-server-plugin-base": "^0.13.0"
        }
      },
      "apollo-utilities": {
        "version": "1.3.4",
        "resolved": "https://registry.npmjs.org/apollo-utilities/-/apollo-utilities-1.3.4.tgz",
        "integrity": "sha512-pk2hiWrCXMAy2fRPwEyhvka+mqwzeP60Jr1tRYi5xru+3ko94HI9o6lK0CT33/w4RDlxWchmdhDCrvdr+pHCig==",
        "requires": {
          "@wry/equality": "^0.1.2",
          "fast-json-stable-stringify": "^2.0.0",
          "ts-invariant": "^0.4.0",
          "tslib": "^1.10.0"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      },
      "aproba": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
        "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
      },
      "are-we-there-yet": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
        "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
        "requires": {
          "delegates": "^1.0.0",
          "readable-stream": "^2.0.6"
        }
      },
      "array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
      },
      "async-retry": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/async-retry/-/async-retry-1.3.3.tgz",
        "integrity": "sha512-wfr/jstw9xNi/0teMHrRW7dsz3Lt5ARhYNZ2ewpadnhaIp5mbALhOAP+EAdsC7t4Z6wqsDVv9+W6gm1Dk9mEyw==",
        "requires": {
          "retry": "0.13.1"
        }
      },
      "backo2": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",
        "integrity": "sha1-MasayLEpNjRj41s+u2n038+6eUc="
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
      },
      "bcrypt": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.0.0.tgz",
        "integrity": "sha512-jB0yCBl4W/kVHM2whjfyqnxTmOHkCX4kHEa5nYKSoGeYe8YrjTYTc87/6bwt1g8cmV0QrbhKriETg9jWtcREhg==",
        "requires": {
          "node-addon-api": "^3.0.0",
          "node-pre-gyp": "0.15.0"
        }
      },
      "binary-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
        "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow==",
        "dev": true
      },
      "bl": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/bl/-/bl-2.2.1.tgz",
        "integrity": "sha512-6Pesp1w0DEX1N550i/uGV/TqucVL4AM/pgThFSN/Qq9si1/DF9aIHs1BxD8V/QU0HoeHO6cQRTAuYnLPKq1e4g==",
        "requires": {
          "readable-stream": "^2.3.5",
          "safe-buffer": "^5.1.1"
        }
      },
      "bluebird": {
        "version": "3.5.1",
        "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
        "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
      },
      "body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
        "requires": {
          "bytes": "3.1.0",
          "content-type": "~1.0.4",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "on-finished": "~2.3.0",
          "qs": "6.7.0",
          "raw-body": "2.4.0",
          "type-is": "~1.6.17"
        }
      },
      "boxen": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
        "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
        "dev": true,
        "requires": {
          "ansi-align": "^3.0.0",
          "camelcase": "^5.3.1",
          "chalk": "^3.0.0",
          "cli-boxes": "^2.2.0",
          "string-width": "^4.1.0",
          "term-size": "^2.1.0",
          "type-fest": "^0.8.1",
          "widest-line": "^3.1.0"
        }
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "dev": true,
        "requires": {
          "fill-range": "^7.0.1"
        }
      },
      "bson": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.4.tgz",
        "integrity": "sha512-S/yKGU1syOMzO86+dGpg2qGoDL0zvzcb262G+gqEy6TgP6rt6z6qxSFX/8X6vLC91P7G7C3nLs0+bvDzmvBA3Q=="
      },
      "buffer-equal-constant-time": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
        "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
      },
      "busboy": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.3.1.tgz",
        "integrity": "sha512-y7tTxhGKXcyBxRKAni+awqx8uqaJKrSFSNFSeRG5CsWNdmy2BIK+6VGWEW7TZnIO/533mtMEA4rOevQV815YJw==",
        "requires": {
          "dicer": "0.3.0"
        }
      },
      "bytes": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
        "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
      },
      "cacheable-request": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
        "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
        "dev": true,
        "requires": {
          "clone-response": "^1.0.2",
          "get-stream": "^5.1.0",
          "http-cache-semantics": "^4.0.0",
          "keyv": "^3.0.0",
          "lowercase-keys": "^2.0.0",
          "normalize-url": "^4.1.0",
          "responselike": "^1.0.2"
        },
        "dependencies": {
          "get-stream": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.1.0.tgz",
            "integrity": "sha512-EXr1FOzrzTfGeL0gQdeFEvOMm2mzMOglyiOXSTpPC+iAjAKftbr3jpCMWynogwYnM+eSj9sHGc6wjIcDvYiygw==",
            "dev": true,
            "requires": {
              "pump": "^3.0.0"
            }
          },
          "lowercase-keys": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
            "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
            "dev": true
          }
        }
      },
      "call-bind": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
        "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
        "requires": {
          "function-bind": "^1.1.1",
          "get-intrinsic": "^1.0.2"
        }
      },
      "camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
        "dev": true
      },
      "chalk": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
        "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
        "dev": true,
        "requires": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        },
        "dependencies": {
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "dev": true,
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "chokidar": {
        "version": "3.3.1",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
        "integrity": "sha512-4QYCEWOcK3OJrxwvyyAOxFuhpvOVCYkr33LPfFNBjAD/w3sEzWsp2BUOkI4l9bHvWioAd0rc6NlHUOEaWkTeqg==",
        "dev": true,
        "requires": {
          "anymatch": "~3.1.1",
          "braces": "~3.0.2",
          "fsevents": "~2.1.2",
          "glob-parent": "~5.1.0",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.3.0"
        }
      },
      "chownr": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
        "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
      },
      "ci-info": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
        "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
        "dev": true
      },
      "cli-boxes": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.0.tgz",
        "integrity": "sha512-gpaBrMAizVEANOpfZp/EEUixTXDyGt7DFzdK5hU+UbWt/J0lB0w20ncZj59Z9a93xHb9u12zF5BS6i9RKbtg4w==",
        "dev": true
      },
      "cliui": {
        "version": "7.0.4",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
        "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
        "requires": {
          "string-width": "^4.2.0",
          "strip-ansi": "^6.0.0",
          "wrap-ansi": "^7.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
            "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
          },
          "strip-ansi": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
            "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
            "requires": {
              "ansi-regex": "^5.0.1"
            }
          }
        }
      },
      "clone-response": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
        "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
        "dev": true,
        "requires": {
          "mimic-response": "^1.0.0"
        }
      },
      "code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
      },
      "color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "requires": {
          "color-name": "~1.1.4"
        }
      },
      "color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "commander": {
        "version": "2.20.3",
        "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
        "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "concurrently": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-7.0.0.tgz",
        "integrity": "sha512-WKM7PUsI8wyXpF80H+zjHP32fsgsHNQfPLw/e70Z5dYkV7hF+rf8q3D+ScWJIEr57CpkO3OWBko6hwhQLPR8Pw==",
        "requires": {
          "chalk": "^4.1.0",
          "date-fns": "^2.16.1",
          "lodash": "^4.17.21",
          "rxjs": "^6.6.3",
          "spawn-command": "^0.0.2-1",
          "supports-color": "^8.1.0",
          "tree-kill": "^1.2.2",
          "yargs": "^16.2.0"
        },
        "dependencies": {
          "chalk": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
            "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            },
            "dependencies": {
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
          },
          "supports-color": {
            "version": "8.1.1",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
            "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "configstore": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
        "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
        "dev": true,
        "requires": {
          "dot-prop": "^5.2.0",
          "graceful-fs": "^4.1.2",
          "make-dir": "^3.0.0",
          "unique-string": "^2.0.0",
          "write-file-atomic": "^3.0.0",
          "xdg-basedir": "^4.0.0"
        }
      },
      "console-control-strings": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
        "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
      },
      "content-disposition": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
        "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
        "requires": {
          "safe-buffer": "5.1.2"
        }
      },
      "content-type": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
        "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
      },
      "cookie": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
        "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
      },
      "cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
      },
      "core-js-pure": {
        "version": "3.21.1",
        "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.21.1.tgz",
        "integrity": "sha512-12VZfFIu+wyVbBebyHmRTuEE/tZrB4tJToWcwAMcsp3h4+sHR+fMJWbKpYiCRWlhFBq+KNyO8rIV9rTkeVmznQ=="
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
      },
      "cors": {
        "version": "2.8.5",
        "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
        "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
        "requires": {
          "object-assign": "^4",
          "vary": "^1"
        }
      },
      "crypto-random-string": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
        "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
        "dev": true
      },
      "cssfilter": {
        "version": "0.0.10",
        "resolved": "https://registry.npmjs.org/cssfilter/-/cssfilter-0.0.10.tgz",
        "integrity": "sha1-xtJnJjKi5cg+AT5oZKQs6N79IK4="
      },
      "date-fns": {
        "version": "2.28.0",
        "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.28.0.tgz",
        "integrity": "sha512-8d35hViGYx/QH0icHYCeLmsLmMUheMmTyV9Fcm6gvNwdw31yXXH+O85sOBJ+OLnLQMKZowvpKb6FgMIQjcpvQw=="
      },
      "debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "requires": {
          "ms": "2.0.0"
        }
      },
      "decompress-response": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
        "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
        "dev": true,
        "requires": {
          "mimic-response": "^1.0.0"
        }
      },
      "deep-extend": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
        "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
      },
      "defer-to-connect": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
        "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==",
        "dev": true
      },
      "define-properties": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
        "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
        "requires": {
          "object-keys": "^1.0.12"
        }
      },
      "delegates": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
        "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
      },
      "depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
      },
      "deprecated-decorator": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/deprecated-decorator/-/deprecated-decorator-0.1.6.tgz",
        "integrity": "sha1-AJZjF7ehL+kvPMgx91g68ym4bDc="
      },
      "destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
      },
      "detect-libc": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
        "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
      },
      "dicer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.3.0.tgz",
        "integrity": "sha512-MdceRRWqltEG2dZqO769g27N/3PXfcKl04VhYnBlo2YhH7zPi88VebsjTKclaOyiuMaGU72hTfw3VkUitGcVCA==",
        "requires": {
          "streamsearch": "0.1.2"
        }
      },
      "dot-prop": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.2.0.tgz",
        "integrity": "sha512-uEUyaDKoSQ1M4Oq8l45hSE26SnTxL6snNnqvK/VWx5wJhmff5z0FUVJDKDanor/6w3kzE3i7XZOk+7wC0EXr1A==",
        "dev": true,
        "requires": {
          "is-obj": "^2.0.0"
        }
      },
      "duplexer3": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
        "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
        "dev": true
      },
      "ecdsa-sig-formatter": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
        "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
      },
      "emoji-regex": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
        "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
        "dev": true
      },
      "encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
      },
      "end-of-stream": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
        "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
        "dev": true,
        "requires": {
          "once": "^1.4.0"
        }
      },
      "es-abstract": {
        "version": "1.19.1",
        "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.19.1.tgz",
        "integrity": "sha512-2vJ6tjA/UfqLm2MPs7jxVybLoB8i1t1Jd9R3kISld20sIxPcTbLuggQOUxeWeAvIUkduv/CfMjuh4WmiXr2v9w==",
        "requires": {
          "call-bind": "^1.0.2",
          "es-to-primitive": "^1.2.1",
          "function-bind": "^1.1.1",
          "get-intrinsic": "^1.1.1",
          "get-symbol-description": "^1.0.0",
          "has": "^1.0.3",
          "has-symbols": "^1.0.2",
          "internal-slot": "^1.0.3",
          "is-callable": "^1.2.4",
          "is-negative-zero": "^2.0.1",
          "is-regex": "^1.1.4",
          "is-shared-array-buffer": "^1.0.1",
          "is-string": "^1.0.7",
          "is-weakref": "^1.0.1",
          "object-inspect": "^1.11.0",
          "object-keys": "^1.1.1",
          "object.assign": "^4.1.2",
          "string.prototype.trimend": "^1.0.4",
          "string.prototype.trimstart": "^1.0.4",
          "unbox-primitive": "^1.0.1"
        }
      },
      "es-to-primitive": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
        "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
        "requires": {
          "is-callable": "^1.1.4",
          "is-date-object": "^1.0.1",
          "is-symbol": "^1.0.2"
        }
      },
      "escalade": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
        "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
      },
      "escape-goat": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
        "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
        "dev": true
      },
      "escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
      },
      "etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
      },
      "eventemitter3": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz",
        "integrity": "sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q=="
      },
      "express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
        "requires": {
          "accepts": "~1.3.7",
          "array-flatten": "1.1.1",
          "body-parser": "1.19.0",
          "content-disposition": "0.5.3",
          "content-type": "~1.0.4",
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "~1.1.2",
          "fresh": "0.5.2",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.5",
          "qs": "6.7.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.1.2",
          "send": "0.17.1",
          "serve-static": "1.14.1",
          "setprototypeof": "1.1.1",
          "statuses": "~1.5.0",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        }
      },
      "faker": {
        "version": "6.6.6",
        "resolved": "https://registry.npmjs.org/faker/-/faker-6.6.6.tgz",
        "integrity": "sha512-9tCqYEDHI5RYFQigXFwF1hnCwcWCOJl/hmll0lr5D2Ljjb0o4wphb69wikeJDz5qCEzXCoPvG6ss5SDP6IfOdg=="
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
      },
      "fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "dev": true,
        "requires": {
          "to-regex-range": "^5.0.1"
        }
      },
      "finalhandler": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
        "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
        "requires": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "statuses": "~1.5.0",
          "unpipe": "~1.0.0"
        }
      },
      "for-each": {
        "version": "0.3.3",
        "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
        "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
        "requires": {
          "is-callable": "^1.1.3"
        }
      },
      "forwarded": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
        "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
      },
      "fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
      },
      "fs-capacitor": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/fs-capacitor/-/fs-capacitor-2.0.4.tgz",
        "integrity": "sha512-8S4f4WsCryNw2mJJchi46YgB6CR5Ze+4L1h8ewl9tEpL4SJ3ZO+c/bS4BWhB8bK+O3TMqhuZarTitd0S0eh2pA=="
      },
      "fs-minipass": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
        "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
        "requires": {
          "minipass": "^2.6.0"
        }
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "fsevents": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.3.tgz",
        "integrity": "sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==",
        "dev": true,
        "optional": true
      },
      "function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
      },
      "gauge": {
        "version": "2.7.4",
        "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
        "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
        "requires": {
          "aproba": "^1.0.3",
          "console-control-strings": "^1.0.0",
          "has-unicode": "^2.0.0",
          "object-assign": "^4.1.0",
          "signal-exit": "^3.0.0",
          "string-width": "^1.0.1",
          "strip-ansi": "^3.0.1",
          "wide-align": "^1.1.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          },
          "is-fullwidth-code-point": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
            "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
            "requires": {
              "number-is-nan": "^1.0.0"
            }
          },
          "string-width": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
            "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
            "requires": {
              "code-point-at": "^1.0.0",
              "is-fullwidth-code-point": "^1.0.0",
              "strip-ansi": "^3.0.0"
            }
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          }
        }
      },
      "get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
      },
      "get-intrinsic": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
        "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
        "requires": {
          "function-bind": "^1.1.1",
          "has": "^1.0.3",
          "has-symbols": "^1.0.1"
        }
      },
      "get-stream": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
        "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
        "dev": true,
        "requires": {
          "pump": "^3.0.0"
        }
      },
      "get-symbol-description": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
        "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
        "requires": {
          "call-bind": "^1.0.2",
          "get-intrinsic": "^1.1.1"
        }
      },
      "glob": {
        "version": "7.1.7",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
        "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
        "dev": true,
        "requires": {
          "is-glob": "^4.0.1"
        }
      },
      "global-dirs": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.0.1.tgz",
        "integrity": "sha512-5HqUqdhkEovj2Of/ms3IeS/EekcO54ytHRLV4PEY2rhRwrHXLQjeVEES0Lhka0xwNDtGYn58wyC4s5+MHsOO6A==",
        "dev": true,
        "requires": {
          "ini": "^1.3.5"
        }
      },
      "got": {
        "version": "9.6.0",
        "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
        "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
        "dev": true,
        "requires": {
          "@sindresorhus/is": "^0.14.0",
          "@szmarczak/http-timer": "^1.1.2",
          "cacheable-request": "^6.0.0",
          "decompress-response": "^3.3.0",
          "duplexer3": "^0.1.4",
          "get-stream": "^4.1.0",
          "lowercase-keys": "^1.0.1",
          "mimic-response": "^1.0.1",
          "p-cancelable": "^1.0.0",
          "to-readable-stream": "^1.0.0",
          "url-parse-lax": "^3.0.0"
        }
      },
      "graceful-fs": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
        "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ==",
        "dev": true
      },
      "graphql": {
        "version": "15.8.0",
        "resolved": "https://registry.npmjs.org/graphql/-/graphql-15.8.0.tgz",
        "integrity": "sha512-5gghUc24tP9HRznNpV2+FIoq3xKkj5dTQqf4v0CpdPbFVwFkWoxOM+o+2OC9ZSvjEMTjfmG9QT+gcvggTwW1zw=="
      },
      "graphql-extensions": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/graphql-extensions/-/graphql-extensions-0.15.0.tgz",
        "integrity": "sha512-bVddVO8YFJPwuACn+3pgmrEg6I8iBuYLuwvxiE+lcQQ7POotVZxm2rgGw0PvVYmWWf3DT7nTVDZ5ROh/ALp8mA==",
        "requires": {
          "@apollographql/apollo-tools": "^0.5.0",
          "apollo-server-env": "^3.1.0",
          "apollo-server-types": "^0.9.0"
        }
      },
      "graphql-subscriptions": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/graphql-subscriptions/-/graphql-subscriptions-1.2.1.tgz",
        "integrity": "sha512-95yD/tKi24q8xYa7Q9rhQN16AYj5wPbrb8tmHGM3WRc9EBmWrG/0kkMl+tQG8wcEuE9ibR4zyOM31p5Sdr2v4g==",
        "requires": {
          "iterall": "^1.3.0"
        }
      },
      "graphql-tag": {
        "version": "2.12.6",
        "resolved": "https://registry.npmjs.org/graphql-tag/-/graphql-tag-2.12.6.tgz",
        "integrity": "sha512-FdSNcu2QQcWnM2VNvSCCDCVS5PpPqpzgFT8+GXzqJuoDd0CBncxCY278u4mhRO7tMgo2JjgJA5aZ+nWSQ/Z+xg==",
        "requires": {
          "tslib": "^2.1.0"
        }
      },
      "graphql-tools": {
        "version": "4.0.8",
        "resolved": "https://registry.npmjs.org/graphql-tools/-/graphql-tools-4.0.8.tgz",
        "integrity": "sha512-MW+ioleBrwhRjalKjYaLQbr+920pHBgy9vM/n47sswtns8+96sRn5M/G+J1eu7IMeKWiN/9p6tmwCHU7552VJg==",
        "requires": {
          "apollo-link": "^1.2.14",
          "apollo-utilities": "^1.0.1",
          "deprecated-decorator": "^0.1.6",
          "iterall": "^1.1.3",
          "uuid": "^3.1.0"
        },
        "dependencies": {
          "uuid": {
            "version": "3.4.0",
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
            "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
          }
        }
      },
      "has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "requires": {
          "function-bind": "^1.1.1"
        }
      },
      "has-bigints": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
        "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA=="
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
        "dev": true
      },
      "has-symbols": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
        "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
      },
      "has-tostringtag": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
        "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
        "requires": {
          "has-symbols": "^1.0.2"
        }
      },
      "has-unicode": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
        "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
      },
      "has-yarn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
        "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
        "dev": true
      },
      "http-cache-semantics": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
        "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
        "dev": true
      },
      "http-errors": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
        "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
        "requires": {
          "depd": "~1.1.2",
          "inherits": "2.0.3",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        }
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "ignore-by-default": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
        "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk=",
        "dev": true
      },
      "ignore-walk": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.4.tgz",
        "integrity": "sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==",
        "requires": {
          "minimatch": "^3.0.4"
        }
      },
      "import-lazy": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
        "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
        "dev": true
      },
      "imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
        "dev": true
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
        "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
      },
      "ini": {
        "version": "1.3.8",
        "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
        "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
      },
      "internal-slot": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
        "integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
        "requires": {
          "get-intrinsic": "^1.1.0",
          "has": "^1.0.3",
          "side-channel": "^1.0.4"
        }
      },
      "ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
      },
      "is-bigint": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
        "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
        "requires": {
          "has-bigints": "^1.0.1"
        }
      },
      "is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dev": true,
        "requires": {
          "binary-extensions": "^2.0.0"
        }
      },
      "is-boolean-object": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
        "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
        "requires": {
          "call-bind": "^1.0.2",
          "has-tostringtag": "^1.0.0"
        }
      },
      "is-callable": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
        "integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w=="
      },
      "is-ci": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
        "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
        "dev": true,
        "requires": {
          "ci-info": "^2.0.0"
        }
      },
      "is-date-object": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
        "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
        "requires": {
          "has-tostringtag": "^1.0.0"
        }
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
        "dev": true
      },
      "is-fullwidth-code-point": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
        "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "dev": true,
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-installed-globally": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
        "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
        "dev": true,
        "requires": {
          "global-dirs": "^2.0.1",
          "is-path-inside": "^3.0.1"
        }
      },
      "is-negative-zero": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
        "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA=="
      },
      "is-npm": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
        "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig==",
        "dev": true
      },
      "is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "dev": true
      },
      "is-number-object": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.6.tgz",
        "integrity": "sha512-bEVOqiRcvo3zO1+G2lVMy+gkkEm9Yh7cDMRusKKu5ZJKPUYSJwICTKZrNKHA2EbSP0Tu0+6B/emsYNHZyn6K8g==",
        "requires": {
          "has-tostringtag": "^1.0.0"
        }
      },
      "is-obj": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
        "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
        "dev": true
      },
      "is-path-inside": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.2.tgz",
        "integrity": "sha512-/2UGPSgmtqwo1ktx8NDHjuPwZWmHhO+gj0f93EkhLB5RgW9RZevWYYlIkS6zePc6U2WpOdQYIwHe9YC4DWEBVg==",
        "dev": true
      },
      "is-regex": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
        "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
        "requires": {
          "call-bind": "^1.0.2",
          "has-tostringtag": "^1.0.0"
        }
      },
      "is-shared-array-buffer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.1.tgz",
        "integrity": "sha512-IU0NmyknYZN0rChcKhRO1X8LYz5Isj/Fsqh8NJOSf+N/hCOTwy29F32Ik7a+QszE63IdvmwdTPDd6cZ5pg4cwA=="
      },
      "is-string": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
        "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
        "requires": {
          "has-tostringtag": "^1.0.0"
        }
      },
      "is-symbol": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
        "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
        "requires": {
          "has-symbols": "^1.0.2"
        }
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
        "dev": true
      },
      "is-weakref": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
        "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
        "requires": {
          "call-bind": "^1.0.2"
        }
      },
      "is-yarn-global": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
        "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==",
        "dev": true
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
      },
      "iterall": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/iterall/-/iterall-1.3.0.tgz",
        "integrity": "sha512-QZ9qOMdF+QLHxy1QIpUHUU1D5pS2CG2P69LF6L6CPjPYA/XMOmKV3PZpawHoAjHNyB0swdVTRxdYT4tbBbxqwg=="
      },
      "json-buffer": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
        "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
        "dev": true
      },
      "jsonwebtoken": {
        "version": "8.5.1",
        "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
        "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
        "requires": {
          "jws": "^3.2.2",
          "lodash.includes": "^4.3.0",
          "lodash.isboolean": "^3.0.3",
          "lodash.isinteger": "^4.0.4",
          "lodash.isnumber": "^3.0.3",
          "lodash.isplainobject": "^4.0.6",
          "lodash.isstring": "^4.0.1",
          "lodash.once": "^4.0.0",
          "ms": "^2.1.1",
          "semver": "^5.6.0"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "jwa": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
        "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
        "requires": {
          "buffer-equal-constant-time": "1.0.1",
          "ecdsa-sig-formatter": "1.0.11",
          "safe-buffer": "^5.0.1"
        }
      },
      "jws": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
        "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
        "requires": {
          "jwa": "^1.4.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "kareem": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.1.tgz",
        "integrity": "sha512-l3hLhffs9zqoDe8zjmb/mAN4B8VT3L56EUvKNqLFVs9YlFA+zx7ke1DO8STAdDyYNkeSo1nKmjuvQeI12So8Xw=="
      },
      "keyv": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
        "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
        "dev": true,
        "requires": {
          "json-buffer": "3.0.0"
        }
      },
      "latest-version": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
        "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
        "dev": true,
        "requires": {
          "package-json": "^6.3.0"
        }
      },
      "lodash": {
        "version": "4.17.21",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
        "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
      },
      "lodash.includes": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
        "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
      },
      "lodash.isboolean": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
        "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
      },
      "lodash.isinteger": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
        "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
      },
      "lodash.isnumber": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
        "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
      },
      "lodash.isplainobject": {
        "version": "4.0.6",
        "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
        "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
      },
      "lodash.isstring": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
        "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
      },
      "lodash.once": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
        "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
      },
      "lodash.sortby": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
        "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg="
      },
      "loglevel": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.8.0.tgz",
        "integrity": "sha512-G6A/nJLRgWOuuwdNuA6koovfEV1YpqqAG4pRUlFaz3jj2QNZ8M4vBqnVA+HBTmU/AMNUtlOsMmSpF6NyOjztbA=="
      },
      "long": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
        "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
      },
      "lowercase-keys": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
        "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
        "dev": true
      },
      "lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "requires": {
          "yallist": "^4.0.0"
        },
        "dependencies": {
          "yallist": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
          }
        }
      },
      "make-dir": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
        "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
        "dev": true,
        "requires": {
          "semver": "^6.0.0"
        },
        "dependencies": {
          "semver": {
            "version": "6.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
            "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
            "dev": true
          }
        }
      },
      "media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
      },
      "memory-pager": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
        "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
        "optional": true
      },
      "merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
      },
      "methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
      },
      "mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
      },
      "mime-db": {
        "version": "1.44.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
        "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg=="
      },
      "mime-types": {
        "version": "2.1.27",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
        "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
        "requires": {
          "mime-db": "1.44.0"
        }
      },
      "mimic-response": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
        "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
        "dev": true
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.5",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
        "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
      },
      "minipass": {
        "version": "2.9.0",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
        "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
        "requires": {
          "safe-buffer": "^5.1.2",
          "yallist": "^3.0.0"
        }
      },
      "minizlib": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
        "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
        "requires": {
          "minipass": "^2.9.0"
        }
      },
      "mkdirp": {
        "version": "0.5.5",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
        "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
        "requires": {
          "minimist": "^1.2.5"
        }
      },
      "mongoose": {
        "version": "5.9.10",
        "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.9.10.tgz",
        "integrity": "sha512-w1HNukfJzzDLfcI1f79h2Wj4ogVbf+X8hRkyFgqlcjK7OnDlAgahjDMIsT+mCS9jKojrMhjSsZIs9FiRPkLqMg==",
        "requires": {
          "bson": "^1.1.4",
          "kareem": "2.3.1",
          "mongodb": "3.5.6",
          "mongoose-legacy-pluralize": "1.0.2",
          "mpath": "0.7.0",
          "mquery": "3.2.2",
          "ms": "2.1.2",
          "regexp-clone": "1.0.0",
          "safe-buffer": "5.1.2",
          "sift": "7.0.1",
          "sliced": "1.0.1"
        },
        "dependencies": {
          "denque": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/denque/-/denque-1.5.1.tgz",
            "integrity": "sha512-XwE+iZ4D6ZUB7mfYRMb5wByE8L74HCn30FBN7sWnXksWc1LO1bPDl67pBR9o/kC4z/xSNAwkMYcGgqDV3BE3Hw=="
          },
          "mongodb": {
            "version": "3.5.6",
            "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.5.6.tgz",
            "integrity": "sha512-sh3q3GLDLT4QmoDLamxtAECwC3RGjq+oNuK1ENV8+tnipIavss6sMYt77hpygqlMOCt0Sla5cl7H4SKCVBCGEg==",
            "requires": {
              "bl": "^2.2.0",
              "bson": "^1.1.4",
              "denque": "^1.4.1",
              "require_optional": "^1.0.1",
              "safe-buffer": "^5.1.2",
              "saslprep": "^1.0.0"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "mongoose-legacy-pluralize": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
        "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ==",
        "requires": {}
      },
      "mpath": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.7.0.tgz",
        "integrity": "sha512-Aiq04hILxhz1L+f7sjGyn7IxYzWm1zLNNXcfhDtx04kZ2Gk7uvFdgZ8ts1cWa/6d0TQmag2yR8zSGZUmp0tFNg=="
      },
      "mquery": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.2.tgz",
        "integrity": "sha512-XB52992COp0KP230I3qloVUbkLUxJIu328HBP2t2EsxSFtf4W1HPSOBWOXf1bqxK4Xbb66lfMJ+Bpfd9/yZE1Q==",
        "requires": {
          "bluebird": "3.5.1",
          "debug": "3.1.0",
          "regexp-clone": "^1.0.0",
          "safe-buffer": "5.1.2",
          "sliced": "1.0.1"
        },
        "dependencies": {
          "debug": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
            "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
            "requires": {
              "ms": "2.0.0"
            }
          }
        }
      },
      "ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
      },
      "needle": {
        "version": "2.6.0",
        "resolved": "https://registry.npmjs.org/needle/-/needle-2.6.0.tgz",
        "integrity": "sha512-KKYdza4heMsEfSWD7VPUIz3zX2XDwOyX2d+geb4vrERZMT5RMU6ujjaD+I5Yr54uZxQ2w6XRTAhHBbSCyovZBg==",
        "requires": {
          "debug": "^3.2.6",
          "iconv-lite": "^0.4.4",
          "sax": "^1.2.4"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.7",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
            "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
          }
        }
      },
      "negotiator": {
        "version": "0.6.2",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
        "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
      },
      "node-addon-api": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
        "integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A=="
      },
      "node-fetch": {
        "version": "2.6.7",
        "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",
        "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",
        "requires": {
          "whatwg-url": "^5.0.0"
        }
      },
      "node-pre-gyp": {
        "version": "0.15.0",
        "resolved": "https://registry.npmjs.org/node-pre-gyp/-/node-pre-gyp-0.15.0.tgz",
        "integrity": "sha512-7QcZa8/fpaU/BKenjcaeFF9hLz2+7S9AqyXFhlH/rilsQ/hPZKK32RtR5EQHJElgu+q5RfbJ34KriI79UWaorA==",
        "requires": {
          "detect-libc": "^1.0.2",
          "mkdirp": "^0.5.3",
          "needle": "^2.5.0",
          "nopt": "^4.0.1",
          "npm-packlist": "^1.1.6",
          "npmlog": "^4.0.2",
          "rc": "^1.2.7",
          "rimraf": "^2.6.1",
          "semver": "^5.3.0",
          "tar": "^4.4.2"
        },
        "dependencies": {
          "nopt": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
            "integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
            "requires": {
              "abbrev": "1",
              "osenv": "^0.1.4"
            }
          }
        }
      },
      "nodemon": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.3.tgz",
        "integrity": "sha512-lLQLPS90Lqwc99IHe0U94rDgvjo+G9I4uEIxRG3evSLROcqQ9hwc0AxlSHKS4T1JW/IMj/7N5mthiN58NL/5kw==",
        "dev": true,
        "requires": {
          "chokidar": "^3.2.2",
          "debug": "^3.2.6",
          "ignore-by-default": "^1.0.1",
          "minimatch": "^3.0.4",
          "pstree.remy": "^1.1.7",
          "semver": "^5.7.1",
          "supports-color": "^5.5.0",
          "touch": "^3.1.0",
          "undefsafe": "^2.0.2",
          "update-notifier": "^4.0.0"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "dev": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
          }
        }
      },
      "nopt": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
        "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
        "dev": true,
        "requires": {
          "abbrev": "1"
        }
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true
      },
      "normalize-url": {
        "version": "4.5.1",
        "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.1.tgz",
        "integrity": "sha512-9UZCFRHQdNrfTpGg8+1INIg93B6zE0aXMVFkw1WFwvO4SlZywU6aLg5Of0Ap/PgcbSw4LNxvMWXMeugwMCX0AA==",
        "dev": true
      },
      "npm-bundled": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
        "integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
        "requires": {
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "npm-normalize-package-bin": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
        "integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA=="
      },
      "npm-packlist": {
        "version": "1.4.8",
        "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.8.tgz",
        "integrity": "sha512-5+AZgwru5IevF5ZdnFglB5wNlHG1AOOuw28WhUq8/8emhBmLv6jX5by4WJCh7lW0uSYZYS6DXqIsyZVIXRZU9A==",
        "requires": {
          "ignore-walk": "^3.0.1",
          "npm-bundled": "^1.0.1",
          "npm-normalize-package-bin": "^1.0.1"
        }
      },
      "npmlog": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
        "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
        "requires": {
          "are-we-there-yet": "~1.1.2",
          "console-control-strings": "~1.1.0",
          "gauge": "~2.7.3",
          "set-blocking": "~2.0.0"
        }
      },
      "number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
      },
      "object-inspect": {
        "version": "1.12.0",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.0.tgz",
        "integrity": "sha512-Ho2z80bVIvJloH+YzRmpZVQe87+qASmBUKZDWgx9cu+KDrX2ZDH/3tMy+gXbZETVGs2M8YdxObOh7XAtim9Y0g=="
      },
      "object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
      },
      "object-path": {
        "version": "0.11.8",
        "resolved": "https://registry.npmjs.org/object-path/-/object-path-0.11.8.tgz",
        "integrity": "sha512-YJjNZrlXJFM42wTBn6zgOJVar9KFJvzx6sTWDte8sWZF//cnjl0BxHNpfZx+ZffXX63A9q0b1zsFiBX4g4X5KA=="
      },
      "object.assign": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
        "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
        "requires": {
          "call-bind": "^1.0.0",
          "define-properties": "^1.1.3",
          "has-symbols": "^1.0.1",
          "object-keys": "^1.1.1"
        }
      },
      "object.getownpropertydescriptors": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.3.tgz",
        "integrity": "sha512-VdDoCwvJI4QdC6ndjpqFmoL3/+HxffFBbcJzKi5hwLLqqx3mdbedRpfZDdK0SrOSauj8X4GzBvnDZl4vTN7dOw==",
        "requires": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3",
          "es-abstract": "^1.19.1"
        }
      },
      "on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "requires": {
          "ee-first": "1.1.1"
        }
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "requires": {
          "wrappy": "1"
        }
      },
      "os-homedir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
        "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
      },
      "osenv": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
        "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
        "requires": {
          "os-homedir": "^1.0.0",
          "os-tmpdir": "^1.0.0"
        }
      },
      "p-cancelable": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
        "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
        "dev": true
      },
      "package-json": {
        "version": "6.5.0",
        "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
        "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
        "dev": true,
        "requires": {
          "got": "^9.6.0",
          "registry-auth-token": "^4.0.0",
          "registry-url": "^5.0.0",
          "semver": "^6.2.0"
        },
        "dependencies": {
          "semver": {
            "version": "6.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
            "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
            "dev": true
          }
        }
      },
      "parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
      },
      "path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
      },
      "picomatch": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
        "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
        "dev": true
      },
      "prepend-http": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
        "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
        "dev": true
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
      },
      "proxy-addr": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
        "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
        "requires": {
          "forwarded": "~0.1.2",
          "ipaddr.js": "1.9.1"
        }
      },
      "pstree.remy": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.7.tgz",
        "integrity": "sha512-xsMgrUwRpuGskEzBFkH8NmTimbZ5PcPup0LA8JJkHIm2IMUbQcpo3yeLNWVrufEYjh8YwtSVh0xz6UeWc5Oh5A==",
        "dev": true
      },
      "pump": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
        "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
        "dev": true,
        "requires": {
          "end-of-stream": "^1.1.0",
          "once": "^1.3.1"
        }
      },
      "pupa": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.0.1.tgz",
        "integrity": "sha512-hEJH0s8PXLY/cdXh66tNEQGndDrIKNqNC5xmrysZy3i5C3oEoLna7YAOad+7u125+zH1HNXUmGEkrhb3c2VriA==",
        "dev": true,
        "requires": {
          "escape-goat": "^2.0.0"
        }
      },
      "qs": {
        "version": "6.7.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
        "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
      },
      "range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
      },
      "raw-body": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
        "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
        "requires": {
          "bytes": "3.1.0",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        }
      },
      "rc": {
        "version": "1.2.8",
        "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
        "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
        "requires": {
          "deep-extend": "^0.6.0",
          "ini": "~1.3.0",
          "minimist": "^1.2.0",
          "strip-json-comments": "~2.0.1"
        }
      },
      "readable-stream": {
        "version": "2.3.7",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
        "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
        "requires": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        }
      },
      "readdirp": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
        "integrity": "sha512-zz0pAkSPOXXm1viEwygWIPSPkcBYjW1xU5j/JBh5t9bGCJwa6f9+BJa6VaB2g+b55yVrmXzqkyLf4xaWYM0IkQ==",
        "dev": true,
        "requires": {
          "picomatch": "^2.0.7"
        }
      },
      "regexp-clone": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
        "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
      },
      "registry-auth-token": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.1.1.tgz",
        "integrity": "sha512-9bKS7nTl9+/A1s7tnPeGrUpRcVY+LUh7bfFgzpndALdPfXQBfQV77rQVtqgUV3ti4vc/Ik81Ex8UJDWDQ12zQA==",
        "dev": true,
        "requires": {
          "rc": "^1.2.8"
        }
      },
      "registry-url": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
        "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
        "dev": true,
        "requires": {
          "rc": "^1.2.8"
        }
      },
      "require_optional": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
        "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
        "requires": {
          "resolve-from": "^2.0.0",
          "semver": "^5.1.0"
        }
      },
      "require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
      },
      "resolve-from": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
        "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c="
      },
      "responselike": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
        "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
        "dev": true,
        "requires": {
          "lowercase-keys": "^1.0.0"
        }
      },
      "retry": {
        "version": "0.13.1",
        "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
        "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg=="
      },
      "rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "rxjs": {
        "version": "6.6.7",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
        "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
        "requires": {
          "tslib": "^1.9.0"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      },
      "safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "saslprep": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
        "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
        "optional": true,
        "requires": {
          "sparse-bitfield": "^3.0.3"
        }
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
      },
      "semver-diff": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
        "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
        "dev": true,
        "requires": {
          "semver": "^6.3.0"
        },
        "dependencies": {
          "semver": {
            "version": "6.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
            "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
            "dev": true
          }
        }
      },
      "send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "requires": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
          }
        }
      },
      "serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "requires": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        }
      },
      "set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
      },
      "setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
      },
      "sha.js": {
        "version": "2.4.11",
        "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
        "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "side-channel": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
        "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
        "requires": {
          "call-bind": "^1.0.0",
          "get-intrinsic": "^1.0.2",
          "object-inspect": "^1.9.0"
        }
      },
      "sift": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
        "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
      },
      "signal-exit": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
        "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
      },
      "sliced": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
        "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
      },
      "sparse-bitfield": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
        "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
        "optional": true,
        "requires": {
          "memory-pager": "^1.0.2"
        }
      },
      "spawn-command": {
        "version": "0.0.2-1",
        "resolved": "https://registry.npmjs.org/spawn-command/-/spawn-command-0.0.2-1.tgz",
        "integrity": "sha1-YvXpRmmBwbeW3Fkpk34RycaSG9A="
      },
      "statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
      },
      "streamsearch": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
        "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo="
      },
      "string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "requires": {
          "safe-buffer": "~5.1.0"
        }
      },
      "string-width": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
        "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
        "requires": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
          },
          "emoji-regex": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
            "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
          },
          "is-fullwidth-code-point": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
            "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
          },
          "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
              "ansi-regex": "^5.0.0"
            }
          }
        }
      },
      "string.prototype.trimend": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
        "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
        "requires": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3"
        }
      },
      "string.prototype.trimstart": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
        "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
        "requires": {
          "call-bind": "^1.0.2",
          "define-properties": "^1.1.3"
        }
      },
      "strip-ansi": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
        "dev": true,
        "requires": {
          "ansi-regex": "^4.1.0"
        }
      },
      "strip-json-comments": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
        "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
      },
      "subscriptions-transport-ws": {
        "version": "0.9.19",
        "resolved": "https://registry.npmjs.org/subscriptions-transport-ws/-/subscriptions-transport-ws-0.9.19.tgz",
        "integrity": "sha512-dxdemxFFB0ppCLg10FTtRqH/31FNRL1y1BQv8209MK5I4CwALb7iihQg+7p65lFcIl8MHatINWBLOqpgU4Kyyw==",
        "requires": {
          "backo2": "^1.0.2",
          "eventemitter3": "^3.1.0",
          "iterall": "^1.2.1",
          "symbol-observable": "^1.0.4",
          "ws": "^5.2.0 || ^6.0.0 || ^7.0.0"
        }
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "dev": true,
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "symbol-observable": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
        "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ=="
      },
      "tar": {
        "version": "4.4.19",
        "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.19.tgz",
        "integrity": "sha512-a20gEsvHnWe0ygBY8JbxoM4w3SJdhc7ZAuxkLqh+nvNQN2IOt0B5lLgM490X5Hl8FF0dl0tOf2ewFYAlIFgzVA==",
        "requires": {
          "chownr": "^1.1.4",
          "fs-minipass": "^1.2.7",
          "minipass": "^2.9.0",
          "minizlib": "^1.3.3",
          "mkdirp": "^0.5.5",
          "safe-buffer": "^5.2.1",
          "yallist": "^3.1.1"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
          }
        }
      },
      "term-size": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.0.tgz",
        "integrity": "sha512-a6sumDlzyHVJWb8+YofY4TW112G6p2FCPEAFk+59gIYHv3XHRhm9ltVQ9kli4hNWeQBwSpe8cRN25x0ROunMOw==",
        "dev": true
      },
      "to-readable-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
        "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
        "dev": true
      },
      "to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dev": true,
        "requires": {
          "is-number": "^7.0.0"
        }
      },
      "toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
      },
      "touch": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
        "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
        "dev": true,
        "requires": {
          "nopt": "~1.0.10"
        }
      },
      "tr46": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
        "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o="
      },
      "tree-kill": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
        "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A=="
      },
      "ts-invariant": {
        "version": "0.4.4",
        "resolved": "https://registry.npmjs.org/ts-invariant/-/ts-invariant-0.4.4.tgz",
        "integrity": "sha512-uEtWkFM/sdZvRNNDL3Ehu4WVpwaulhwQszV8mrtcdeE8nN00BV9mAmQ88RkrBhFgl9gMgvjJLAQcZbnPXI9mlA==",
        "requires": {
          "tslib": "^1.9.3"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      },
      "tslib": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
        "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
      },
      "type-fest": {
        "version": "0.8.1",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
        "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
        "dev": true
      },
      "type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "requires": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        }
      },
      "typedarray-to-buffer": {
        "version": "3.1.5",
        "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
        "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
        "dev": true,
        "requires": {
          "is-typedarray": "^1.0.0"
        }
      },
      "unbox-primitive": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
        "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
        "requires": {
          "function-bind": "^1.1.1",
          "has-bigints": "^1.0.1",
          "has-symbols": "^1.0.2",
          "which-boxed-primitive": "^1.0.2"
        }
      },
      "undefsafe": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.3.tgz",
        "integrity": "sha512-nrXZwwXrD/T/JXeygJqdCO6NZZ1L66HrxM/Z7mIq2oPanoN0F1nLx3lwJMu6AwJY69hdixaFQOuoYsMjE5/C2A==",
        "dev": true,
        "requires": {
          "debug": "^2.2.0"
        }
      },
      "unique-string": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
        "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
        "dev": true,
        "requires": {
          "crypto-random-string": "^2.0.0"
        }
      },
      "unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
      },
      "update-notifier": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.0.tgz",
        "integrity": "sha512-w3doE1qtI0/ZmgeoDoARmI5fjDoT93IfKgEGqm26dGUOh8oNpaSTsGNdYRN/SjOuo10jcJGwkEL3mroKzktkew==",
        "dev": true,
        "requires": {
          "boxen": "^4.2.0",
          "chalk": "^3.0.0",
          "configstore": "^5.0.1",
          "has-yarn": "^2.1.0",
          "import-lazy": "^2.1.0",
          "is-ci": "^2.0.0",
          "is-installed-globally": "^0.3.1",
          "is-npm": "^4.0.0",
          "is-yarn-global": "^0.3.0",
          "latest-version": "^5.0.0",
          "pupa": "^2.0.1",
          "semver-diff": "^3.1.1",
          "xdg-basedir": "^4.0.0"
        }
      },
      "url-parse-lax": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
        "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
        "dev": true,
        "requires": {
          "prepend-http": "^2.0.0"
        }
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "util.promisify": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.1.1.tgz",
        "integrity": "sha512-/s3UsZUrIfa6xDhr7zZhnE9SLQ5RIXyYfiVnMMyMDzOc8WhWN4Nbh36H842OyurKbCDAesZOJaVyvmSl6fhGQw==",
        "requires": {
          "call-bind": "^1.0.0",
          "define-properties": "^1.1.3",
          "for-each": "^0.3.3",
          "has-symbols": "^1.0.1",
          "object.getownpropertydescriptors": "^2.1.1"
        }
      },
      "utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
      },
      "uuid": {
        "version": "8.3.2",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
        "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="
      },
      "vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
      },
      "webidl-conversions": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
        "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE="
      },
      "whatwg-url": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
        "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
        "requires": {
          "tr46": "~0.0.3",
          "webidl-conversions": "^3.0.0"
        }
      },
      "which-boxed-primitive": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
        "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
        "requires": {
          "is-bigint": "^1.0.1",
          "is-boolean-object": "^1.1.0",
          "is-number-object": "^1.0.4",
          "is-string": "^1.0.5",
          "is-symbol": "^1.0.3"
        }
      },
      "wide-align": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
        "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
        "requires": {
          "string-width": "^1.0.2 || 2"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
            "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
          },
          "string-width": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
            "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
            "requires": {
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^4.0.0"
            }
          },
          "strip-ansi": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
            "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
            "requires": {
              "ansi-regex": "^3.0.0"
            }
          }
        }
      },
      "widest-line": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
        "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
        "dev": true,
        "requires": {
          "string-width": "^4.0.0"
        }
      },
      "wrap-ansi": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
        "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
        "requires": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
            "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
          },
          "strip-ansi": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
            "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
            "requires": {
              "ansi-regex": "^5.0.1"
            }
          }
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "write-file-atomic": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
        "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
        "dev": true,
        "requires": {
          "imurmurhash": "^0.1.4",
          "is-typedarray": "^1.0.0",
          "signal-exit": "^3.0.2",
          "typedarray-to-buffer": "^3.1.5"
        }
      },
      "ws": {
        "version": "7.5.7",
        "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.7.tgz",
        "integrity": "sha512-KMvVuFzpKBuiIXW3E4u3mySRO2/mCHSyZDJQM5NQ9Q9KHWHWh0NHgfbRMLLrceUK5qAL4ytALJbpRMjixFZh8A==",
        "requires": {}
      },
      "xdg-basedir": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
        "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
        "dev": true
      },
      "xss": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/xss/-/xss-1.0.10.tgz",
        "integrity": "sha512-qmoqrRksmzqSKvgqzN0055UFWY7OKx1/9JWeRswwEVX9fCG5jcYRxa/A2DHcmZX6VJvjzHRQ2STeeVcQkrmLSw==",
        "requires": {
          "commander": "^2.20.3",
          "cssfilter": "0.0.10"
        }
      },
      "y18n": {
        "version": "5.0.8",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
        "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="
      },
      "yallist": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
        "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
      },
      "yargs": {
        "version": "16.2.0",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
        "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
        "requires": {
          "cliui": "^7.0.2",
          "escalade": "^3.1.1",
          "get-caller-file": "^2.0.5",
          "require-directory": "^2.1.1",
          "string-width": "^4.2.0",
          "y18n": "^5.0.5",
          "yargs-parser": "^20.2.2"
        }
      },
      "yargs-parser": {
        "version": "20.2.9",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
        "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w=="
      },
      "zen-observable": {
        "version": "0.8.15",
        "resolved": "https://registry.npmjs.org/zen-observable/-/zen-observable-0.8.15.tgz",
        "integrity": "sha512-PQ2PC7R9rslx84ndNBZB/Dkv8V8fZEpk83RLgXtYd0fwUgEjseMn1Dgajh2x6S8QbZAFa9p2qVCEuYZNgve0dQ=="
      },
      "zen-observable-ts": {
        "version": "0.8.21",
        "resolved": "https://registry.npmjs.org/zen-observable-ts/-/zen-observable-ts-0.8.21.tgz",
        "integrity": "sha512-Yj3yXweRc8LdRMrCC8nIc4kkjWecPAUVh0TI0OUrWXx6aX790vLcDlWca6I4vsyCGH3LpWxq0dJRcMOFoVqmeg==",
        "requires": {
          "tslib": "^1.9.3",
          "zen-observable": "^0.8.0"
        },
        "dependencies": {
          "tslib": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
            "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
          }
        }
      }
    }
  }