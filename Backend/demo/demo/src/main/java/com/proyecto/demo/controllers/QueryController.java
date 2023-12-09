package com.proyecto.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.demo.models.QueryModels;
import com.proyecto.demo.repositories.QueryRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/query")
public class QueryController {

    @Autowired
    private QueryRepository queryRepository;

    @GetMapping
    public List<QueryModels> getAllQueries() {
        return queryRepository.findAll();
    } 

    @GetMapping("/{id}")
    public QueryModels getQueryById(@PathVariable Long id) {
        return queryRepository.findById(id).orElse(null);
    }

    @PostMapping
    public QueryModels createQuery(@RequestBody QueryModels query) {
        return queryRepository.save(query);
    }
    @PostMapping("/posts")
    public List<QueryModels> createQueries(@RequestBody List<QueryModels> queries) {
        return queryRepository.saveAll(queries);
    }

    // ...

    @PatchMapping("/{id}")
    public QueryModels updateQuery(@PathVariable Long id, @RequestBody QueryModels query) {
        QueryModels foundQuery = queryRepository.findById(id).orElse(null);
        if (foundQuery != null) {
            if (query.getDifficulty() != null) foundQuery.setDifficulty(query.getDifficulty());
            if (query.getQuestion() != null) foundQuery.setQuestion(query.getQuestion());
            if (query.getCategory() != null) foundQuery.setCategory(query.getCategory());
            if (query.getCorrect_answer() != null) foundQuery.setCorrect_answer(query.getCorrect_answer());
            if (query.getIncorrect_answers() != null) foundQuery.setIncorrect_answers(query.getIncorrect_answers());
            return queryRepository.save(foundQuery);
        }
        return null;
    }

    // ...

    @DeleteMapping("/{id}")
    public void deleteQuery(@PathVariable Long id) {
        queryRepository.deleteById(id);
    }
}