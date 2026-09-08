nanao installation project 
Pourquoi ajouter Node.js? 
    satria mila fast sy speed ny asa hafa toy ny upload song, transaction, etc...
    ary ny Real-time update (amin'ny hoavy), be librairies manampy , sy flexible be
pnpm init
touch tanana:
    nanampy express, mongoose, cors, dotenv, nodemon ( -D)
    structure de dossier:
        - controllers
        - routes
        - config
        - models
        - .env

    Nampiana Multer(upload fast), Morgan, Fluent FFmpeg, jsonwebtoken, helmet

    namerina config: 
        - nanao installation TS dia tsy maintsy nanao config (tsc --init)// command
        - nampihatra config nodemon.js (hoan'ny dev mode), nikitika package.json (scripts) ho ts friendly, ary nanova hoe index.ts
        - installation tsx en devDep (-D)
        - novaina anaty src/* ny file sy dir 

    aza adino manampy devDep: @types/xxx (e.g */express,...)
    aza adino asiana .js ny import rehefa mampiasa ESM + TS 

    config: nanampy swagger-doc sy ui-express hoan'ny documentation API

    middleware: nanampy JWTVerify hoan'ny token verification avy any amin'ny symfony ary apetraka amin'ny route rehetra