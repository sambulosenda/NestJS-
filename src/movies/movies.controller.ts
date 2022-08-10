import { Controller, Get, Param, Post, Delete, Put, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This returns all movies"
    }

    @Get('/:id')
    getOne(@Param('id') movieid: string) {
        return `This will return one movie: ${movieid}`
    }

    @Post()
    create() {
        return 'this will create a movie'
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `this will delate a movie with id: ${movieId}`
    }

    @Patch('/:id')
    path(@Param('id') movieId: string) {
        return `This will pat a  movie with id ${movieId}`

    }
    
}
