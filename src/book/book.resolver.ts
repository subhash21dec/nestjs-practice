import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookService } from "./book.service";
import { Book } from "./schema/book.schema";

import { Book as BookModel } from "../graphql"
import { AddBookArgs } from "./args/add.book.args";

@Resolver(of => Book)
export class BookResolver {

    constructor(private readonly bookService: BookService) { } 

    // Queries and mutations
    @Query(returns => [Book], { name: "books" })
    getAllBooks(): BookModel[] {
        return this.bookService.findAllBooks();
    }
    @Query(returns => Book, { name: "findBookById", nullable: true })
    getBookById(@Args({ name: "bookId", type: () => Int }) id: number): BookModel {
        return this.bookService.findBookById(id);
    }
    @Mutation(returns => String, { name: "deleteBook" })
    deleteBookById(@Args({ name: "bookId", type: () => Int }) id: number): string {
        return this.bookService.deleteBook(id);
    }
    @Mutation(returns => String, { name: "addBook" })
    addBook(@Args("addBookArgs") addBookArgs: AddBookArgs): string {
        return this.bookService.addBook(addBookArgs);
    }
    @Mutation(returns => String, { name: "updateBook" })
    updateBook(@Args({ name: "bookId", type: () => Int }) id: number, @Args("updateBookArgs")
    updateBookArgs: AddBookArgs): string {
        return this.bookService.updateBook(id, updateBookArgs);
    }





}
















// import { Resolver, Query } from "@nestjs/graphql";
// import { Book } from "./Book";
// import { Book as BookModel} from "src/graphql";

// @Resolver((of) => Book)
// export class BookResolver {
//     @Query((returns) => [Book], { name: 'books' })

//     getAllBooks() {
//         let arr: BookModel[]=[ { id: 1, title: 'Harry Potter', price: 500 },
//         { id: 2, title: 'Hunger Games', price: 600 },
//         { id: 3, title: 'Hunger Hood', price: 900 },];
//         return arr;

//     }

// }