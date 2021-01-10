package com.hilel.factures.controllers;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hilel.factures.entities.Facture;
import com.hilel.factures.services.FactureService;
@Controller
public class FactureController {
@Autowired

FactureService factureService;

@RequestMapping("/showCreate")
public String showCreate(ModelMap modelMap)
{
modelMap.addAttribute("facture", new Facture());
modelMap.addAttribute("mode", "new");
return "formFacture";
}
@RequestMapping("/saveFacture")
public String saveFacture(@Valid Facture facture,
BindingResult bindingResult)

{
if (bindingResult.hasErrors()) return "formFacture";
factureService.saveFacture(facture);
return "formFacture";
}

@RequestMapping("/ListeFactures")
public String listeFactures(ModelMap modelMap,
@RequestParam (name="page",defaultValue = "0") int page,
@RequestParam (name="size", defaultValue = "2") int size)
{
Page<Facture> facs = factureService.getAllFActuresParPage(page, size);
modelMap.addAttribute("factures", facs);
 modelMap.addAttribute("pages", new int[facs.getTotalPages()]);
modelMap.addAttribute("currentPage", page);
return "listefactures";
}



@RequestMapping("/supprimerFacture")
public String supprimerFacture(@RequestParam("id") Long id,
ModelMap modelMap,
@RequestParam (name="page",defaultValue = "0") int page,
@RequestParam (name="size", defaultValue = "2") int size)
{
factureService.deleteFactureById(id);
Page<Facture> facs = factureService.getAllFActuresParPage(page,size);
modelMap.addAttribute("factures", facs);
modelMap.addAttribute("pages", new int[facs.getTotalPages()]);
modelMap.addAttribute("currentPage", page);
modelMap.addAttribute("size", size);
return "listeFactures";
}
@RequestMapping("/modifierFacture")
public String editerFacture(@RequestParam("id") Long id,ModelMap modelMap)
{
Facture p= factureService.getFacture(id);
modelMap.addAttribute("facture", p);
modelMap.addAttribute("mode", "edit");
return "formFacture";
}


@RequestMapping("/updateFacture")
public String updateFacture(@ModelAttribute("facture") Facture facture,
@RequestParam("date") String date,ModelMap modelMap) throws ParseException
{
	//conversion de la date
	 SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
	 Date dateCreation = dateformat.parse(String.valueOf(date));
	 facture.setDateCreation(dateCreation);

	factureService.updateFacture(facture);
	 List<Facture> prods = factureService.getAllFactures();
	 modelMap.addAttribute("factures", prods);
	return "listeFactures";
	}


}